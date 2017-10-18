const LinkedList  = require( './linkedlist.js');

const checkCircular = (list) => {
  let startOfCircle = list.head;
  let fastPointer = list.head.next;

  while(startOfCircle.value !== fastPointer.value && fastPointer.next) {
    startOfCircle = startOfCircle.next;
    fastPointer  = fastPointer.next.next;
  }
 return startOfCircle === fastPointer ? fastPointer : 'Did not find a circle huzzzaahhh'; 
};
