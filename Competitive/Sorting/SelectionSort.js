function SelectionSort(arr) {
    var min, minIndex
    for(var i=0; i<arr.length; i++) {
        min = arr[i]
        minIndex = i
        for(var j=i; j<arr.length; j++) {
            if(arr[j] < min){
                min=arr[j]
                minIndex=j
            }
        }
        if(min < arr[i])
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
}

console.log(SelectionSort([20,12,10,15,2]))
// Time: O(n^2)