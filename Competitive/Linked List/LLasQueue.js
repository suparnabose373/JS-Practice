class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(start, rear=null) {
        this.start = start
        this.rear = rear
    }

    enqueue(element) {
        var node = new Node(element, null)
        if(!this.start)
            this.start = node
        else 
            this.rear.next = node
        this.rear = node
    }

    print() {
        var current = this.start
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }  

    dequeue() {
        if(!this.start)
            console.log('Queue is empty!')
        else 
            this.start = this.start.next
    }
}
const ll = new LinkedList()
ll.enqueue(100)
ll.enqueue(200)
ll.dequeue()
ll.enqueue(300)
ll.print()
// console.log(ll)