const quickSort = (arr) => {
  const copy = arr.slice();
  const left = [];
  const right = [];
  
  if (copy.length < 2) {
  	return copy;
  }	
  let pivot = copy.splice([copy.length - 1], 1);
  for (let i = 0; i < copy.length; i++) {
   copy[i] <=pivot ? left.push(copy[i]) : right.push(copy[i]);
  		
  }
  return [...quickSort(left),...pivot,...quickSort(right)];

}

const testCase = [3,4,5,6,1,2,8,34,9,26,90,42];
// console.log(quickSort(testCase));