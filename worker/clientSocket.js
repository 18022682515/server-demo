const net = require('net');


module.exports = (port, host) => {
	const socket = net.connect(port, host, () => {
		console.log('连接服务器成功');
		socket.write('我是客户端');
	});

	socket.on('data', data => {
		console.log(data.toString());
	});

	socket.on('end', () => {
		console.log('end');
	});
	return socket;
}
