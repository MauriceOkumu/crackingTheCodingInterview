 class LinkedList   {
	constructor() {
    this.head = null;
    this.size = 0
	}
}

const Node = function(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
	var current = this.head;
  if (this.head === null) {
  	this.head = new Node(value);

  }else{

  while(current.next) {

  	current = current.next;
  }
  current.next = new Node(value);
  }
  this.size++;
};


// let input1 = new LinkedList();
// input1.add(6)
// input1.add(5)
// input1.add(9)
// input1.add(2)

let input2 = new LinkedList();
input2.add(1)
input2.add(7)
input2.add(3)
input2.add(8)
 // input2.head.next.next.next = input2.head.next;
// input2.add(5)
// input2.add(9)
// input2.add(2)
// console.log (input2)



// console.log(checkCircular(input2));
module.exports =  LinkedList;


