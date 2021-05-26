/**
 * 网站图标
 */

module.exports = async function(ctx,next){
	if(/favicon.ico/.test(ctx.url)){
		const filePath = require('path').join(__dirname, '../static/favicon.ico'); //默认图片地址
		const file = require('fs').readFileSync(filePath); //读取文件	    
		ctx.set('content-type', 'image/x-icon'); //设置返回类型
		return ctx.body = file; //返回图片
	}
	await next();
}