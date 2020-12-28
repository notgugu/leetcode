/*
 * @Description: 
 * @Version: 1.0
 * @Author: mxk
 * @Date: 2020-12-21 16:02:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-12-28 14:45:12
 */
/*
给定一个正整数 n ，输出外观数列的第 n 项。「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';
  var count= 1,ans = '1';
  while(count < n) {
    // 使ans的值指向上一项的值，直到n - 1项
    ans = describe(ans)
    count++;
  }
  return ans;
};
var describe = function (ans) {
  // 双指针描述
  let p1 = 0,p2 = 0,res = '';
  while(p1 <= ans.length - 1 && p2 <= ans.length - 1 ) {
    // p1位置的数 不等于 p2位置的数时
    if (ans[p1] !== ans[p2]) {
      // res 取得描述，同时更新p1指针的值为p2
      res += (p2 - p1) + ans[p1];
      p1 = p2;
    } else if (ans[p1] === ans[p2] && p2 === ans.length - 1) {
      // p1位置的数等于p2位置的数时且p2指向最后一项时，取得描述，同时更新p1指针的值为p2+1
      res += (p2 - p1 + 1) + ans[p2];
      p1 = p2 + 1;
    } else {
      // p1位置的数等于p2位置的数且p2不指向最后一项时，p2++
      p2++;
    }
  }
  // 返回描述
  return res;
}

