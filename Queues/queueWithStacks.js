//create the stack first
class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}
	push(value) {
		this.storage[this.size++] = value;
	}
	pop() {
		// if(this.size > 0) {

			let poppedValue = this.storage[this.size - 1];
			delete this.storage[--this.size];
			return poppedValue;
		// }
		// return 'The stack is empty'
	}
}


class QueueWithStack {
	constructor() {
		this.addValue = new Stack()
		this.removeValue = new Stack()
	}

	enqueue(value) {
		this.addValue.push(value);
	}

	dequeue() {
		if (this.removeValue.size === 0) {
			while (this.addValue.size > 0) {
				this.removeValue.push(this.addValue.pop());
			}
		} 
       this.removeValue.pop();
	}
}


let test = new QueueWithStack();
test.enqueue(9)
test.enqueue(10)
test.enqueue(11)
test.dequeue()
test.enqueue(12)
test.dequeue()
test.enqueue(13)
test.enqueue(14)
test.dequeue()
test.dequeue()
// test.push(10)
// test.push(11)
// test.pop()
// test.pop()
// test.pop()
console.log(test);