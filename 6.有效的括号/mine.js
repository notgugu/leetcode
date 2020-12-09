/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 思考了很久考虑的都不全面，参考了题解做出来的答案，利用栈结构完成
  //如果是空字符串  直接返回true
  if(s === '') return true;
  // 如果字符串的长度为奇数，则不可能是有效的括号
  if(s.length % 2 != 0) return false;
  // 建立左括号和右括号的映射
  let map = {
      '(': ')',
      '{': '}',
      '[': ']'
  },list = [];
  for(let i = 0;i < s.length;i++) {
      // 将所有左括号对应的右括号推入list栈中
      if(map.hasOwnProperty(s[i])) {
          list.push(map[s[i]]);
      } else {
          // 如果list为空数组，说明第一个遇到的就是右括号，则不可能是有效的括号
          if(list.length == 0) {
              return false;
          } else {
              // 遇到的第一个右括号应该是最后一个左括号的映射值，该值出栈
              if(list[list.length - 1] === s[i]) {
                  list.pop();
              } else {
                // 如果不是，则不可能是有效的括号
                  return false;
              }
          }
          
      }
  }
  // 数组长度不为零则说明有多余的左括号 错误  长度为零  正确
  return list.length == 0;
};