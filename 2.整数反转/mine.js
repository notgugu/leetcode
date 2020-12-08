
var reverse = function(x) { // 最初写法
  let xArray = x.toString().split('');
  if(x < 0) {
      xArray = xArray.slice(1,xArray.length).reverse();
      let result = xArray.join();
      result = Number(result);
      result = -result;
      if(result < -Math.pow(2,31)) {
          return 0;
      } else {
          return result;
      }
  } else {
      xArray = xArray.reverse();
      let result = xArray.join('');
      result = Number(result);
      if(result > Math.pow(2,31) - 1) {
          return 0;
      } else {
          return result;
      }
  }
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { //数学写法
  let result = 0;
  while(x !== 0) {
      // 每次都取到x的最后一位加到result上
      result = result * 10 + x % 10;
      x = (x / 10) | 0; // | 0 => 转为32位整数
  }
  // 判断result是否超出32位整数范围
  return (result | 0) === result ? result : 0; 
};