class Stack {
	constructor () {
		this.storage = {};
		this.size = 0;
	}
	push(value) {
		this.storage[this.size++] = value;
	}
	pop() {
		var popped = this.storage[this.size - 1];
		delete this.storage[--this.size];
		return popped;
	}
};

class SortedStack {
	constructor() {
		this.mainStorage = new Stack();
		this.sortedStorage = new Stack();
	}
	push(value) {
		this.mainStorage.push(value);
	}
	sortStack () {
		let values = Object.keys(this.mainStorage.storage).sort((a, b) => a - b);
		while (values.length) {
			this.sortedStorage.push(values.shift());
		}
	}
}


let test = new SortedStack();
test.push(9);
test.push(8);
test.push(5);
test.push(4);
test.push(1);
test.push(10);
test.push(3);
test.push(3);
test.push(9);
test.push(6);
test.push(7);
 let obj = test.mainStorage.storage;
 let arr = [4,1,2,3,7,9]

 let testing = arr.reduce((a, b, i)=>{
 	// let res = [];
 	console.log('a', a, 'b ', b,'i', i)
 	  b < arr[i + 1] ? a.push(b) : a.push(arr[i]);
 	 return a;
 },[]);
// test.sortStack();
console.log(testing);