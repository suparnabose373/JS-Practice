arr1=[0, 200, 0, 76, 889,0, 0, 35]
arr2=[0, 3, 83, 83, 83, 209]
arr3=[1,5,3,1,2,8]

// function reverseArray(arr, n) {
//     if(arr.length === 0)
//         return []
//     return [arr.pop()].concat(reverseArray(arr));
// }

// console.log(reverseArray([200, 0, 76, 889, 35], 5))

// function removeDuplicates(arr) {
//     var count=0, i=0;
//     while(i<arr.length){ 
//         if(arr[i] === arr[i+1]){
//             count+=1
//             i-=1
//         }
//         if(count>0){
//             arr.splice(i, 1)
//             count=0
//         }
//         i+=1
//     }
//     return arr
// }

// console.log(removeDuplicates(arr2))


// function moveZeros(arr) {
//     var j=0;
//     for(var i=0;i<arr.length;i++){ 
//         if(arr[i] !== 0){
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++;         
//         }
//     }
//     return arr
// }

// console.log(moveZeros(arr1))

// function moveZeros(arr) {
//     for(var i=0;i<arr.length;i++){ 
//         if(arr[i]===0){
//             arr.splice(i,1)
//             arr.push(0)
//         }
//         console.log(arr)
//     }
//     return arr
// }
    
// console.log(moveZeros(arr1))


// function leftRotate(arr, d) {
//     index=0;
//     while(index <= d){
//         arr.push(arr[0]);
//         arr.splice(0,1);
//         index++;
//     }
//     return arr;
// }
// console.log(leftRotate(arr1, 2))


// Print elements which are greater than the elements to it's right
// function maxRight(arr){
//     var max = arr[arr.length-1];
//     for(var i=arr.length-2;i>=0;i--){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//         else{
//             console.log(arr[i])
//             arr.splice(i,1);
//         }
//     }
//     return arr;
// }

// console.log(maxRight([0, 200, 0, 76, 889, 0, 0, 35]))

//Frequency of elements of a sorted array
// function freqofElements(arr){
//     var count=1
//     for(var i=1;i<arr.length;i++){
//         if(arr[i] != arr[i-1]){
//             console.log(arr[i-1], count)
//             count = 1
//         }
//         else{
//             count += 1
//         }
//         if(i === arr.length-1){
//             console.log(arr[i], count)
//         }
//     }
// }
// freqofElements(arr2)


// class Stack {
//     constructor() {
//         this.items = []
//         this.count = 0
//     }

//     // Add element to top of stack
//     push(element) {
//         this.items[this.count] = element
//         console.log(`${element} added to ${this.count}. Array is ${this.items}`)
//         this.count += 1
//         return this.count - 1
//     }

//     // Return and remove top element in stack
//     // Return undefined if stack is empty
//     pop() {
//         if(this.count == 0) return undefined
//         let deleteItem = this.items[this.count - 1]
//         this.items.splice(this.count-1,1)
//         this.count -= 1
//         console.log(`${deleteItem} removed. Array is ${this.items}`)
//         return deleteItem
//     }

//     // Check top element in stack
//     peek() {
//         console.log(`Top element is ${this.items[this.count - 1]}`)
//         return this.items[this.count - 1]
//     }

//     // Check if stack is empty
//     isEmpty() {
//         console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
//         return this.count == 0
//     }

//     // Check size of stack
//     size() {
//         console.log(`${this.count} elements in stack`)
//         return this.count
//     }

//     // Print elements in stack
//     print() {
//         let str = ''
//         for(let i = 0; i < this.count; i++) {
//             str += this.items[i] + ' '
//         }
//         return str
//     }

//     // Clear stack
//     clear() {
//         this.items = []
//         this.count = 0
//         console.log('Stack cleared..')
//         return this.items
//     }
// }

// const stack = new Stack()

// stack.isEmpty()

// stack.push(100)
// stack.push(200)

// stack.peek()

// stack.push(300)

// console.log(stack.print())

// stack.pop()
// stack.push(400)

// stack.clear()

// console.log(stack.print())

// stack.size()

// stack.isEmpty()


// class Queue {
//     constructor() {
//         this.items = []
//         this.rear = -1
//         // Without deleting
//         // this.front = 0
//     }

//     enqueue(element) {
//         this.items[this.rear+1] = element
//         this.rear+=1
//         return this.items
//     }

//     dequeue() {
//         if(this.rear === -1 || this.rear < this.front){
//             console.log('Array is empty')
//             return
//         }
//         //Without deleting
//         // this.items[this.front+1]
//         // this.front+=1
//         // console.log(this.items[this.front-1])
        
//         //Deleting elements
//         this.items.splice(0,1)
//         this.rear-=1
//         console.log(this.items)
//     }
// }

// const queue = new Queue()

// console.log(queue.enqueue(100))
// console.log(queue.enqueue(200))
// console.log(queue.enqueue(300))
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()


// // Highest profit from a given array of stock
// function stockMarket(arr){
//     var res=0, sell=0, buy=arr[0], maxProfit=0
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]>arr[i-1]){
//             sell=arr[i]
//             if(maxProfit < arr[i]-arr[i-1]){
//                 res+=arr[i]-arr[i-1]
//                 maxProfit=0
//             }
//             console.log('maxProfit',maxProfit,arr[i],arr[i-1])
//         }
//         else{
//             buy=arr[i]
//         }
//     }
//     return res
// }

// console.log(stockMarket(arr3))

var served = 0
var routers_count = len(routerCount)
hash_map = {}
building_n = len(buildingCount)

for (i=0;i<routerCount.length;i++){

    var router_location = routerCount[i]

    left_range, right_range = router_location - routerRange[i], router_location + routerRange[i]

    if (left_range < 0)
        left_range = 0
    if (right_range > building_n)
        right_range = building_n

    for (var j=router_location-1; j<=right_range; j++){

        l =j+1
        if (hash_map.hasOwnProperty(l))
            hash_map[l]['count'] += 1
        else
            hash_map[l] = {"count":1,"served":False}

        if (hash_map[l]['count'] >= buildingCount[j] && !hash_map[l]["served"]){
                served +=1
                hash_map[l]["served"] = True}}

    for (var j=left_range; j<=router_location; j++){

        l =j+1
        if (hash_map.hasOwnProperty(l))
            hash_map[l]['count'] += 1
        else
            hash_map[l] = {"count":1,"served":False}
            
        if (hash_map[l]['count'] >= buildingCount[j] && !(hash_map[l]["served"])){
                served+=1
                hash_map[l]["served"] = True}}
}