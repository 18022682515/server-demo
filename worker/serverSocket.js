const net = require('net');

module.exports = (port) => {
	const server = net.createServer(socket => {
		socket.on('data', data => {
			console.log(data.toString());
		});
		socket.on('end', () => {
			console.log('end');
		});
		socket.on('close', () => {
			console.log('连接关闭');
		});
	});

	server.listen(port, () => {
		console.log('socket启动' + port)
	});
	return server;
}
