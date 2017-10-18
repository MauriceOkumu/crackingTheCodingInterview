const testCase = [3,4,5,6,1,2,8,34,9,26,90,42];

const mergeSort = (arr) => {
  const copy = arr.slice()

  if (copy.length < 2) { return copy }

  const middle = Math.floor(copy.length / 2);
  const left = copy.slice(0, middle);
  const right = copy.slice(middle, copy.length);
 

  var sortedLeft = mergeSort(left);
  var sortedRight = mergeSort(right);

  function stitch (left, right) {
  	let result = [];
  	while(left.length && right.length) {
  	 left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
  	 	
  	}
  	return [...result,...left,...right]
  	
  }

  return stitch(sortedLeft, sortedRight);
};	

console.log(mergeSort(testCase));