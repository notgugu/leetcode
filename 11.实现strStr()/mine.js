// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 自己思考的写法  没有使用字符串的substring等方法 用了的话还可以优化
  // 时间复杂度O(m*(n-m))  空间复杂度O(1) m为needle的长度，n为haystack的长度
  if(needle == '') {
      return 0;
  }
  let length = needle.length;
  let testStr = '';
  for(let i = 0;i < haystack.length - length + 1;i++) {
      testStr = ''
      for(let j = i;j < i + length;j++) {
          testStr += haystack[j];
      }
      if(testStr == needle) {
          return i;
      }
  }
  return -1;
};