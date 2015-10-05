"use strict"
class BSTnode {
	constructor(key) {
		this.key = key
		this.left = null
		this.right = null
	}
	print() {
	  //console.log(this.key,this.left,this.right)
	  console.log(this)
		//console.log(root)
	}

	printRec() {
		if(this.key != null) {
			console.log(this.key)
			if(this.left != null) {
			//console.log(this.left.key)
			this.left.printRec()
			}
			if(this.right != null) {
			//console.log(this.right.key)
			this.right.printRec()			
			}
		}
	}	

	search(data) {
		if(this.key != null){
			 if(this.key == data) {
			 	console.log("Found")
			 }
			 if(this.left != nwe
			 	ull) {
			 	this.left.search(data)
			 }
			 if(this.right != null){
			 	this.right.search(data)
			 }
		}
		else{
			console.log("Not found")
		}

	}	

	add(node) {
		if(node.key < this.key) {
			if(this.left === null) {
				this.left = node
			}
			else {
				this.left.add(node)
			}
		}
		else {
			if(node.key > this.key) {
				if(this.right === null) {
					this.right = node
				}
				else {
					this.right.add(node)
				}
			}
		}
	}


}
//console.log(new Node("Hello"))
var root = new BSTnode(5)
//root.print()
root.add(new BSTnode(3))
//root.print()
root.add(new BSTnode(7))
//root.print()
root.add(new BSTnode(9))
//root.print()
root.add(new BSTnode(8))
//root.printRec()
//root.search(7)
root.search(8)
//root.search(3)