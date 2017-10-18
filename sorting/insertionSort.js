const testCase = [3,4,5,6,1,2,8,34,9,26,90,42];

const insertionSort = (arr) => {
	const copy = arr.slice();
	for ( let i = 1; i < copy.length; i++) {
		for (let j = 0; j< i; j++){
			if ( copy[i] < copy[j]) {
				let spliced = copy.splice(i, 1)
				copy.splice(j,0,spliced[0]);
			}
		}
	}
	return copy;
};

console.log(insertionSort(testCase));