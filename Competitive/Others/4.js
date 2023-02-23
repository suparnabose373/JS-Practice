// nums = [1,7,3,6,5,8]
// 3 => 6

function findPivotIndex(nums) {
    var rightSum = nums[nums.length - 1];
    var leftSum = 0;
    var j=nums.length-2, k = 0;
    for(var i=1; i<=nums.length;i++){
        console.log(leftSum, rightSum);
        if(rightSum > leftSum || (rightSum === leftSum && j !== k-1)){
            leftSum += nums[k];
            k++;
        }
        else if(leftSum > rightSum){
            rightSum += nums[j];
            j--;
        
        }
        if(leftSum === rightSum && k === j)
            return j;
        
        else if(k>j) 
            break
        
    }
    return -1;
}

console.log(findPivotIndex([-1,-1,-1,-1,-1,0]));


// class Solution {
//     public int pivotIndex(int[] nums) {
//         int sum = 0, leftsum = 0;
//         for (int x: nums) sum += x;
//         for (int i = 0; i < nums.length; ++i) {
//             if (leftsum == sum - leftsum - nums[i]) return i;
//             leftsum += nums[i];
//         }
//         return -1;
//     }
// }