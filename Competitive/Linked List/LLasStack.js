class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(top) {
        this.top = top
    }

    push(element) {
        var node = new Node(element, this.top)
        this.top = node
    }

    print() {
        var current = this.top
        if(!this.top)
            console.log('Stack is empty')
        else{
            while(current) {
                console.log(current.data)
                current = current.next
            }
        }
    }

    pop() {
        var current = this.top
        if(!this.top)
            console.log('Stack is empty')
        else {
            this.top = current.next
            console.log('Stack right now')
            ll.print()
        }
    }
}
const ll = new LinkedList()
ll.push(500)
ll.push(100)
ll.push(600)
ll.pop()
ll.pop()
ll.pop()
ll.pop()