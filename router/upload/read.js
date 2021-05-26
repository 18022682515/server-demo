/**
 * 读文件
 */
const fs = require('fs')

/**
 * @param {String} filePath
 * @param {String} isUTF8
 */
module.exports = function (filePath,isUTF8){
	return new Promise((res,rej)=>{
		const readStream = fs.createReadStream(filePath);
		isUTF8 && readerStream.setEncoding('UTF8');
		let buf = Buffer.alloc(0);
		
		readStream.on('data',chunk=>{
			buf = Buffer.concat([buf,chunk]);
		})
		
		readStream.on('end',()=>{
			readStream.close();
			readStream.destroy();
			res(buf);
		})
		
		readStream.on('error',error=>{
			rej(error);
		})
	})
}