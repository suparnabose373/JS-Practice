function computeClosestToZero(ts) {
    var b = Math.abs(ts[0]);
    for(var i = 1; i < ts.length; i++) {
        if(Math.abs(ts[i]) < b){
            b = Math.abs(ts[i]);
        }
    }
    return b || 0;
}

console.log(computeClosestToZero([ -5, 2 ]));

// Given an array print the temparature closest to 0