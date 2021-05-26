const WebSocketServer = require('websocket').server;
const Events = require('events');

class wsEvent extends Events {
	users = {};
}

function rewriteSend(ws){
	let send = this.__proto__.send;
	this.__proto__.send = function(message,id){
		id ? send.call(ws.users[id],message) : send.call(this,message);
	}
}

module.exports = server => {
	const ws = new wsEvent();
	const wsServer = new WebSocketServer({
		httpServer: server,
		autoAcceptConnections: false
	});
	wsServer.on('error', err => {
		app.logger.error(err);
	});
	wsServer.on('request', request => {
		const id = Date.now();
		const connection = request.accept('echo-protocol', request.origin);
		connection['id'] = id;
		ws.users[id] = connection;
		rewriteSend.call(connection,ws);
		ws.emit('request',connection);
		connection.on('close', (reasonCode, description) => {
			Reflect.deleteProperty(ws.users,id);
		});
	})
	return ws;
}
