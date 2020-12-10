// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) { 
  //自己解法 
  //自己把重复元素都删了  
  //而优选答案没有 其他差不多
  //当数组长度为0时直接返回长度0
  if(nums.length == 0) {
      return 0;
  }
  //定义新数组的长度，和一个位置指针
  let newLength = 1,index = 0;
  for(index;index < nums.length - 1;) {
      //  当重复时，删除重复值
      if(nums[index] == nums[index + 1]) {
          nums.splice(index,1);
      } else {
      //  不重复则往后进一位
          newLength++;
          index++;
      }
  }
  // 返回新长度
  return newLength;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) { // 双指针写法
  // 定义两个指针
  let p1 = 0,
      p2 = 0;
  // 快指针到尾时结束
  while (p2 < nums.length) {
      // 两者不重复时 慢指针走一步 
      // 同时把快指针对应数组元素的值赋给慢指针对应数组元素的值
      if (nums[p1] != nums[p2]) {
          p1++;
          nums[p1] = nums[p2];
      }
      // 快指针一直走
      p2++;
  }
  return p1 + 1;
};