// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 自己的写法  时间复杂度O(n) 空间复杂度O(1)
  let i = 0;
  for(let j = 0;j < nums.length;j++) {
      if(nums[j] !== val) {
        nums[i] = nums[j];
        i++;
      }
  }
  return i;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 优选答案  思路一样  双指针拷贝覆盖 时间复杂度O(n) 空间复杂度O(1)
  let ans = 0;
  for(const num of nums) {
      if(num != val) {
          nums[ans] = num;
          ans++;
      }
  }
  return ans;
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 第二种思路 双指针交换移除 时间复杂度O(n) 空间复杂度O(1)
  // 遇到val值便与最后面的的值依次往前交换
  let ans = nums.length;
  for (let i = 0; i < ans;) {
      if (nums[i] == val) {
          nums[i] = nums[ans - 1];
          ans--;
      } else {
          i++;
      }
  }
  return ans;
};