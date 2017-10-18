const LinkedList  = require( './linkedlist.js');

let testCase = new LinkedList();
testCase.add(9);
testCase.add(9);
testCase.add(7);
testCase.add(7);
testCase.add(6);

const removeKthElement = (list, k) => {
//We will have two pointers
//A previuos pointer
//To traverse the whole list;
var  fastNode = list.head;
var slowNode ;
var steps = 0;
var temp  = null;

while(fastNode.next) {
	fastNode = fastNode.next;
	steps++;
}
temp = fastNode;
while(k) {
	slowNode = list.head;
	slowNode = slowNode.next
	k--;
}
list.size--;
var val = slowNode.next;
slowNode.next = slowNode.next.next;
return val.value;
return list;
};


console.log(removeKthElement(testCase, 3));


// console.log(removeKthElement(testCase, 3));//size 4