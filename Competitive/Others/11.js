var isPowerOfFour = function(n) {
    console.log(n);
    if(n === 1) {
        return true;
    }
    isPowerOfFour(Math.round(Math.pow(n, 1/4)))
    console.log(n)
    return false
};

console.log(isPowerOfFour(16))