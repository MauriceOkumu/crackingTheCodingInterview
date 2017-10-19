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



module.exports =  LinkedList;


