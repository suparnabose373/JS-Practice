function InsertionSort(arr) {
    var key
    for(var i=0; i<arr.length; i++) {
        key = arr[i]
        for(var j=i; j>0; j--) {
            if(key < arr[j]) {
                console.log(arr[j])
            }

        }
    }
}

console.log(InsertionSort([4,3,2,10,12,1,5,6]))