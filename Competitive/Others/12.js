function minJumps(arr,n){
    //code here
    var count = 0, current, i=1
    while(i<n) {
        current = arr[i]
        console.log(current, arr[i+current], i+current)
        i = i+arr[i+current]
        count+=1
    }
    console.log(count)
}

minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 9)
