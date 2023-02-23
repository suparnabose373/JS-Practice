var isIsomorphic = function(s, t) {
    var obj = [], str = '';
    for(var i=0; i<s.length; i++) {
        
        var val = Object.keys(obj).filter(a => a === s.charAt(i))[0]
        
        console.log(val, obj[val], obj)
    }
    console.log(obj)
};

console.log(isIsomorphic("fodd", "adde"));

//Not done