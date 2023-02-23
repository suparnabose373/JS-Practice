// Print subarray of consucetive values which has largest array
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23


var maxSubArray = function(nums) {
    var sum = 0, maxSum = nums[0];
     for (i = 0; i < nums.length; ++i) {
        if(sum >= 0) 
            sum = sum + nums[i]
        else
            sum = nums[i]
        if (sum > maxSum) 
            maxSum = sum;
    }

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,9]))