const LinkedList  = require( './linkedlist.js');

const interSectingNode =(firstList, secondList) => {
  let firstP = firstList.head;;
  let secondP = secondList.head;
  let returnedNode = null;
  let sizeDiff;
  if (firstList.size > secondList.size) {
   //Do something
    sizeDiff = firstList.size - secondList.size;
    for (var i = 0; i < sizeDiff; i++ ) {
      firstP = firstP.next;
    }
  } else if (secondList.size > firstList.size) {
   //Do something to the secondp
   sizeDiff = secondList.size - firstList.size;
    for (var i = 0; i < sizeDiff; i++ ) {
      secondP = secondP.next;
    }
  } 

  while(firstP && secondP) {
    if (firstP.next.value === secondP.next.value) {
      returnedNode = firstP.next;
      break;
    }
      firstP = firstP.next;
      secondP = secondP.next;
  }


  return returnedNode;

};
