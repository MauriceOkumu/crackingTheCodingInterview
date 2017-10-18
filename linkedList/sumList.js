const LinkedList = require('./linkedlist.js');

let input1 = new LinkedList();
let input2 = new LinkedList();
input1.add(7)
input1.add(1)
input1.add(6)
input2.add(5)
input2.add(9)
input2.add(2)


const sumList = (firstList, secondList) => {
  let summedList = new LinkedList();
  //Helper function to traverse through the list to get values
  listToNumber = (list) => {
    let pointer = list.head;
    let arrayOfvalues = [];
    while (pointer) {
      arrayOfvalues.unshift(pointer.value);
      pointer = pointer.next;
    }

    return Number(arrayOfvalues.join(''));
  }
  let sumOfValuesAsStrings = listToNumber(firstList) + listToNumber(secondList) + '';

  for (let i = sumOfValuesAsStrings.length - 1; i >=0; i--) {
    summedList.add(Number(sumOfValuesAsStrings[i]))
  }

  return summedList;
}


// console.log(sumList( input1, input2));