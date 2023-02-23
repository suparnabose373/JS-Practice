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

    reverse() {
        var prev = null, next = null, current = this.head;
        while(current) {
            console.log(current.data)
            next = current.next; // 2
            current.next = prev; // 1 set to null
            prev = current; // 1
            current = next; // 2
        }
        this.head = prev
    }
}

const ll = new LinkedList()
ll.insertAtLast(1) // prev
ll.insertAtLast(2) // next
ll.insertAtLast(3)
ll.insertAtLast(6)
ll.reverse()
ll.print()