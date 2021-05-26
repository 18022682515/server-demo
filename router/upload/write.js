/**
 * 追加写入文件
 */

const fs = require('fs')

/**
 * @param {Buffer} data
 * @param {String} fileName
 */
module.exports = function(data, fileName) {
	return new Promise((res, rej) => {
		const writeStream = fs.createWriteStream(fileName,{ 'flags': 'a' });

		writeStream.write(data);
		writeStream.end();

		writeStream.on('finish', () => {
			writeStream.close();
			writeStream.destroy();
			res();
		})

		writeStream.on('error', function(err) {
			rej(err);
		})
	})
}
