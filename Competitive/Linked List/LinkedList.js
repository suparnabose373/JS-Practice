class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }

    insertAtFirst(element) {
        var node = new Node(element, this.head)
        this.head = node
    }

    print() {
        var current = this.head
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }    

    insertAtLast(element) {
        var node = new Node(element, null)
        var current = this.head
        if(this.head){
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        else {
            this.head = node
        }
    }

    insertAtN(element, index) {
        var current = this.head
        var count = 1
        if(index === 1)
            ll.insertAtFirst(element)
        else {
            while(current.next) {
                if(count === index) {
                    var node = new Node(element, current.next)
                    current.next = node
                }
                current = current.next
                count+=1
            }
        }
        // if(count !== index-1)
        //     console.log('index not present')
    }

    clearList() {
        this.head = null
    }

    deleteAtN(index) {
        var current = this.head
        var count = 1
        var temp
        if(index === 1)
            this.head = this.head.next
        else {
            while(current.next) {
                if(count === index-1) {
                    // With temp
                    // temp = current.next
                    // current.next = temp.next
                    // Without temp
                    current.next = current.next.next
                }
                current = current.next
                count += 1
            }
        }
    }

    getSearchAtN(index) {
        var current = this.head
        var count = 1
        while(current) {
            if(count === index) {
                console.log('Element at position',index,'is',current.data)
            }
            current = current.next
            count += 1
        }
    }
}
const ll = new LinkedList()
ll.insertAtLast(500)
ll.insertAtFirst(100)
ll.insertAtLast(600)
ll.insertAtN(400, 1)
// ll.clearList()
ll.deleteAtN(2)
ll.print()
ll.getSearchAtN(3)
// ll.print()
// console.log(ll)