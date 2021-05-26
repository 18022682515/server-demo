/**
 * 设置路由
 */
const sliceUpload = require('./upload/sliceUpload.js')


module.exports = router => {
	//参考koa-router

	router.get('/',async (ctx,next)=>{
		await ctx.render('index');
	})
	
	router.post('/UploadProgress',(ctx,next)=>{
		ctx.status = 200;
		ctx.body = Object.keys(app[ctx.request.body['uuid']] || {});
	})
	
	router.post('/upload',sliceUpload);

}