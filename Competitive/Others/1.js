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

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


// var maxArea = function(height) {
//     var result = 0, area = 1;
//     var l = 0, r = height.length-1;
    
//     while(l<r){
//         area = min(height[l], height[r]) * (r-l);
//         result = max(result, area);
        
//         if(height[l] < height[r])
//             l++;
//         else
//             r--;
//     }
//     return result;
// };

// function min(a,b){
//     return (a<b? a : b); 
// }
// function max(a,b){
//     return (a>b? a : b); 
// }

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))