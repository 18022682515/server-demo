module.exports = {
	redis: { //开启redis储存session,不开启设置为redis:false
		port: 6379,
		host: "127.0.0.1",
		family: 4, // 4 (IPv4) or 6 (IPv6)
		password: "",
		db: 0
	},

	keys: ['1234567wertyasdfg'], //cookies的密匙
	
	
	middlewares: [ 'favicon','cors' ], //['middleA','middleB',……], 中间件的文件名加入数组，从0索引开始按顺序执行

	static: 'static', //静态文件的目录

	view: 'static', //html文件的目录

	http: {
		port: 80 //http服务器端口
	},

	https: {
		port: 443, //https服务器端口
		// key: './server.key', //https证书的路径
		// cert: './server.cer'
	},

	mysql: {					//不开启mysql，设置为mysql:false
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'deng'
	}
}
