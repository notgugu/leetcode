/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { //自己思考的最初写法
  let romanList = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  },index = 0,result = 0,sArray = s.split('');
  while(1) {
      if(index >= sArray.length && index != 0) return result;
      if(romanList[sArray[index]] < romanList[sArray[index + 1]] ) {
          result = result + romanList[sArray[index + 1]] - romanList[sArray[index]];
          index +=2;
      } else {
          result = result + romanList[sArray[index]];
          index++;
      }
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { 
  //精选答案  发现思路差不多   不过我多转了一步数组，可以直接使用字符串分割的方法的 而且代码不够简洁
  const map = {
      I : 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
  };
  let ans = 0;
  for(let i = 0;i < s.length;) {
      if(i + 1 < s.length && map[s.substring(i, i+2)]) {
          ans += map[s.substring(i, i+2)];
          i += 2;
      } else {
          ans += map[s.substring(i, i+1)];
          i ++;
      }
  }
  return ans;
};