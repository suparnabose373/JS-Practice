/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i=0,j=0,k=0, nums3 = [];
    while(i!==m && j!==n){
        if(nums1[i] < nums2[j])
            {nums3[k++] = nums1[i++];}
        else
            {nums3[k++] = nums2[j++];}
    }
    while(i < m){
        nums3[k++] = nums1[i++];
    }
    while(j < n){
        nums3[k++] = nums2[j++];
    }
    return nums3
};


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))