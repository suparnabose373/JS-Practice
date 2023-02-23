// return true if you get any values whose sum is targetsum
var a = [5, 3, 4, 7, 2], targetsum = 7
var b = [1,1,1,1,1], targetsum1 = 3


// function canSum(sum, a, memo={}) {
//     if(sum in memo) return memo[sum]
//     if(sum === 0) return true
//     if(sum < 0) return false
    
//     for (var num of a) {
//         var remainder = sum - num
//         if(canSum(remainder, a, memo)) {
//             memo[sum] = true
//             console.log(memo)
//             return true
//         }
//     }
//     memo[sum] = false
//     return false

// }

// console.log(canSum(targetsum, a))


// return the array of numbers whose sum is targetSum

function sumArray(sum, a) {
    var obj = {}
    for(var i=0;i<sum.length;i++) {
        if(!(sum - sum[i] in obj)) {
            obj(sum - sum[i]) = [sum[i]]
        } 
    }
}

sumArray(targetsum, a)