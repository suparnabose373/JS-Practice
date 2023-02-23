// Print the 2 numbers from the nums array which when added will give the target value

var twoSum = function(nums, target) {
    var map = {};
    var num1 = 0;
    for(var i=0; i<nums.length; i++){
        num1 = target - nums[i];
        if(!(map.hasOwnProperty(num1)))
            map[nums[i]] = i;
        else 
            return [map[num1], i]
        console.log
    }
};

console.log(twoSum([3,2,4], 6))