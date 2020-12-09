/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) { //独立思考的写法
  if(strs instanceof Array !== true || strs.length == 0) {
    // 不是数组或是空数组返回空字符串
    return '';
  }
  let shortStr = strs[0],result='';
  // strs.forEach(val => {
  //   if(shortStr.length > val.length) {
  //     // 拿到长度最短的字符串(跟精选答案对比后后发现没必要执行，浪费了时间)
  //     shortStr = val;
  //   }
  // });
  for(let i = 0;i < shortStr.length;i++){
    // 遍历短字符串的字符是否在所以字符串的相应位置存在  若存在  则加到result里  不存在则返回result
    if(strs.every(val => val.substring(i,i+1) === shortStr.substring(i,i+1))){
      result += shortStr.substring(i,i+1);
    } else {
      return result;
    }
  }
  // 特殊情况 [''] 
  return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 精选答案 他是一个字符串的一个一个字符和另一个字符串的字符去比较 不断去判断公共前缀的  而我是一个字符串的一个一个字符和所有的字符串的字符去判断 再去累加公共前缀 我的方法多走了一步和自己比较 (原来字符串也可以使用类似数组str[i]的方法)
  if(strs.length == 0) 
      return "";
  let ans = strs[0];
  for(let i =1;i<strs.length;i++) {
      let j=0;
      for(;j<ans.length && j < strs[i].length;j++) {
          if(ans[j] != strs[i][j])
              break;
      }
      ans = ans.substr(0, j);
      if(ans === "")
          return ans;
  }
  return ans;
};
