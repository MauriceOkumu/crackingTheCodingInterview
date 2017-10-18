const testCase = [3,4,5,6,1,2,8,34,9,26,90,42];
const bubbleSort = (arr) => {
	const copy = arr.slice();
	do{
	var swapped = false;
		for (let i = 0; i < copy.length; i++) {
			if (copy[i + 1] < copy[i]) {
			let temp = copy[i]
				copy[i] = copy[i + 1]
				copy[i + 1] = temp;
				swapped = true;
			}
		}

	}while(swapped)
	return copy;
}
console.log(bubbleSort(testCase))