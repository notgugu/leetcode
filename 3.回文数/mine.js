/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) { // 借助上一题整数反转的思路
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let result = 0,oldX = x;
  while(x > 0) {
      result = result * 10 + x % 10;
      x = parseInt(x / 10);
  };
  return result === oldX ? true : false;
};


var isPalindrome = function(x) { // 优化写法 只反转一半的数字
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let result = 0;
  while(x > result) {
      result = result * 10 + x % 10;
      x = parseInt(x / 10);
  };
  // 数字长度为奇数时舍弃最后一位  为偶数时直接对比
  return result === x || parseInt(result / 10) === x;
};