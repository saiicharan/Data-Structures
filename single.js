/* Singly linked list implementation in JavaScript */

"use strict"
class Node {
	constructor(key,next) {
		this.key = key
		this.next = null
	}

	print() {
		if (this.key != null) {
			console.log(this.key)
			if(this.next != null || this.next === null) 
				this.next.print()
			}
		}

	add(item) {
		if (this.next == null) {	
			var n = new Node(item,null)
			this.next = n
			n.next = null
			console.log(item + " added")
		}
		else { 
			this.next.add(item)
		}	
	}

	search(item) {
		if (this.next != null) 
			if (this.key === item) 
				console.log("Found!")		
			else 
			this.next.search(item)
		else
			console.log("Not found!")
		}

	remove(item) {
		if (this.next != null) 
			if (this.key === item) {
				this.key = item.next
				console.log("Item deleted")
			}
			else {
				this.next.remove(item)
			}
		
		}

}

var root = new Node(8)

root.add(5)
root.add(6)
root.add(7)
root.add(9)
root.search(7) // Found!
root.search(11) // Not found!
root.remove(7) 
root.search(7) // Not found!
root.print() // 8 5 6 9 