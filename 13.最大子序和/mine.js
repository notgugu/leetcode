/*
 * @Description: ...
 * @Version: 1.0
 * @Author: mxk
 * @Date: 2021-01-05 16:29:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-05 16:33:54
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
var maxSubArray = function(nums) {
  // 动态规划 用ans记录最大和的值
  let ans = nums[0]
  let sum = 0;
  for(const num of nums) {
    if(sum > 0) {
      // 子数组的和大于0时，加上当前值
      sum += num;
    } else {
      // 子数组的和小于0时，子数组和为当前值
      sum = num;
    }
    // 不断比较读取子数组和与之前记录的最大子数组的和，取大的那个
    ans = Math.max(ans, sum)
  }
  return ans
}
