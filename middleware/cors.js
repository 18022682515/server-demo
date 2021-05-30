/**
 * 处理跨域
 */

module.exports = async function(ctx,next){
	const allowOrigin = [ 'https://www.xxx.com','localhost','127.0.0.1' ];
	const reg = new RegExp(`(${allowOrigin.join('|')})`);
	const origin = ctx.request.headers.origin || ctx.request.headers.referer || ctx.request.origin;
	const result = reg.test(origin);
	if(!result) return ctx.body = '';
	
	ctx.set('Access-Control-Allow-Origin', origin);
	ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , x-your-header');
	ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	ctx.set('Access-Control-Allow-Credentials', true);
	if(!/options/i.test(ctx.request.method)) return next();
	ctx.body = '';
}