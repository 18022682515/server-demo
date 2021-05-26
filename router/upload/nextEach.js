/**
 * @param {Array} array
 * @param {function} callback
 * 手动遍历数组，执行next时，才遍历下个索引
 */
module.exports = function(array,callback){
	return new Promise(res=>{
		let i = 0;
		
		fn();
		
		function next(){
			if(i<array.length){
				fn();
			}else{
				res();
			}
		}
		
		function fn(){
			callback(next,array[i],i);
			i++;
		}
	})
	
}