class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}
	push(value) {
		this.storage[this.size++] = value;
	}
	pop () {
		let poppedValue = this.storage[this.size - 1];
		this.storage[--this.size] = undefined;
		return poppedValue;
	}
}

// let stackTest1 = new Stack();
// let stackTest2 = new Stack();
// let stackTest3 = new Stack();

const useToCreateStacksArray = [1,2,3,4,5,6,7,8,9];

const createStacksWithArray = (arr) => {
    var start = 0;
    var stop = start + 3;
	var stackArrays = [] //new Array(3).fill(new Stack());
	var st = new Stack()
	var st2 = new Stack()
	var st3 = new Stack()
	stackArrays.push(st,st2, st3)
	//iterate through the arr
	// console.log('this should be one stack => :',stackArrays[0].push(8))
	for (var i = start; i < arr.length; i++) {
      
	}

	return stackArrays;
}


console.log(createStacksWithArray(useToCreateStacksArray));