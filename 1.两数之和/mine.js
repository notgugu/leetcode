/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定 nums = [2, 7, 11, 15], target = 9 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 
 * 所以返回 [0, 1]
 */
var twoSum = function(nums, target) { 
  //暴力枚举法（双重循环）
  for(let j = 0; j < nums.length;j++){
      for(let i = j + 1; i < nums.length;i++){
          if(nums[j] + nums[i] == target){
              return [j,i];
          }
      }
  }
};

var twoSum = function (nums, target) { 
  //利用map的hash结构只做一层遍历
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let targetX = target - nums[i];
    if(map.has(targetX) && map.get(targetX) !== i){ 
    // 查找hash表里是否有目标值，有就返回索引，没就存入表中
        return [map.get(targetX), i];
    } else {
        map.set(nums[i], i);
    }
  }
};