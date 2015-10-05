/* Doubly linked list implementation in JavaScript */

"use strict"
class Node {
	constructor(key,prev,next) {
		this.key = key
		this.prev = null
		this.next = null
	}

	add(item) {
		if (this.next === null) {
			var n = new Node(item,null,null)
			this.next = n
			n.prev = this
			n.next = null
			console.log(item + " added!")
		}
		else
		{
			this.next.add(item)
		}
	}

	print() {
		if(this.key != null) {
			console.log(this.key)
			if(this.next != null) 
			this.next.print()
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
			this.prev.next = this.next
			this.next.prev = this.prev
			console.log(item + " deleted")
		}
		else {
			this.next.remove(item)
		}
	
	}

}
var root = new Node(4)
root.add(5) // 5 added!
root.add(6) // 6 added!
root.add(9) // 9 added!
root.add(8) // 8 added!
root.search(5) // Found!
root.print()
root.remove(5) // 5 deleted
root.search(7) // Not found!
root.remove(6) // 6 deleted
root.print() // 4 9 8