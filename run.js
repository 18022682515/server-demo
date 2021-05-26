const run = require('yu-server');
const webSocket = require('./worker/webSocket.js');
const serverSocket = require('./worker/serverSocket.js');
const clientSocket = require('./worker/clientSocket.js');

run().then(()=>{
	console.log('全局app初始化完成');
	
	app.wsServer = webSocket(app.servers.http || app.servers.https);
	app.serverSocket = serverSocket(8888);
	// app.clientSocket = clientSocket(8080,'127.0.0.1');
	// app.mysql.query('select * from test').then(data=>{});
	// app.tasks	//管理定时任务
	// app.cache	//缓存点什么
	// app.logger	//app的日志对象，含三个方法(error,warn,info);
	// ctx.logger	//request的日志对象(路由回调函数中使用)，含三个方法(error,warn,info);
	
	
	app.wsServer.on('request',connection=>{
		// connection.send('我是发给当前客户端的消息');	//给当前客户端发消息
		// connection.send('我是发给指定客户端的消息',Object.keys(app.wsServer.users)[0]);	//给指定id的客户端发消息，app.wsServer.users是所有已连接的客户端，connection.id是当前客户端id，Object.keys(app.wsServer.users)获取所有客户端id
		connection.on('message', message => {
			console.log(message,'接收到客户端的消息');
			// connection.close();
		});
	})
})




