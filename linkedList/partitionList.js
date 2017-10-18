const LinkedList = require('./linkedlist.js');

let testCase = new LinkedList();
testCase.add(6);
testCase.add(7);
testCase.add(1);
testCase.add(2);
testCase.add(3);
testCase.add(4);
testCase.add(8);
testCase.add(9);

const partitionLinkedList = (list, value) => {
 var left = new LinkedList();
 var right = new LinkedList();
 //Check values in the list and 
 //Add to the left lesser values
 //Add to the right the rest
 var listNode = list.head;

 if(!listNode.next) { return list};
 while(listNode) {
 	if (listNode.value  < value) {
 		left.add(listNode.value);
 	} else {
 		right.add(listNode.value);
 	}
 	listNode = listNode.next;
 }

  var node = left.head;

   while(node.next) {
   	node = node.next
   }
   node.next = right.head;
   left.size += right.size;

 return left;
}

console.log(partitionLinkedList(testCase, 5));