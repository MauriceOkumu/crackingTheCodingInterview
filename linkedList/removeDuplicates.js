const LinkedList  = require( './linkedlist.js');

let testCase = new LinkedList();
testCase.add(9);
testCase.add(9);
testCase.add(7);
testCase.add(7);
testCase.add(6);

/*const removeDuplicate = function(tree) {
  //We need two pointers to compare current value and the rest of the values
  var start = tree.head;
  // console.log(this.head.value);
  var prev;

  while(start.next) {
  // var previous = start;
  var current = start.next;
  // console.log(this)
  if(start.value === current.value) {
    // console.log('this is start value', start.value)
    // console.log('this is current value', current.value)
    // prev = current;
    current = current.next;
    // start.next = current.next ;
    // console.log('this is start.next', start.next)
    // start.next = current.next;
    tree.size--
    break;
    // previous = previous.next;
   }
    current = current.next;
    console.log('Hi inside the esle')

   start = start.next;
  }
  return tree;

};*/

 const removeDuplicates = (tree) => {
   const hash = {};
   let current = tree.head;
   let previous;

   while(current.next) {
    if (!hash[current.value]) {
      hash[current.value] = true;
    } else {
      previous.next = current.next;
      tree.size--;
    }
    previous = current;
    current = current.next
   }
   if (!hash[current.value]) {
    hash[current.value] = 1;
  } else {
    previous.next = current.next;
    tree.size--;
  }
   return tree

 }

// console.log(testCase)
console.log(removeDuplicates(testCase));