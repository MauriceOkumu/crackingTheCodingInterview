const testCase = [2,3,4,16,5,6,1,2,8,2,34,9,26,90,42];

const selectionSort = (arr) => {
 var len = arr.length;
 var min;
 
 swap = (coll, first, next) => {
 	var temp = coll[first];
 	coll[first] = coll[next];
 	coll[next] = temp;
 }
 for ( var i = 0; i < len; i++) {
 	min = i;
 	for ( var j = i + 1; j < len; j++) {
 		if (arr[j] < arr[min]) {
 			min = j;
 		}
 	}
 	swap(arr, i, min)
 }
 return arr;
};

console.log(selectionSort(testCase));