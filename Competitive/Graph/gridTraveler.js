const gridTraveler= (m,n,memo={})=>{
    var key = m + ',' + n
    var key1 = n + ',' + m
    if(key in memo) return memo[key]
    if(key1 in memo) return memo[key1]
    if(m===1 || n===1) return 1
    if(m===0 || n===0) return 0
    memo[key] = gridTraveler(m-1,n, memo) + gridTraveler(m,n-1, memo)
    return memo[key]
}

console.log(gridTraveler(18,18))