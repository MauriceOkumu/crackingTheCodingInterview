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
		let poppedValue = this.storage[this.size - 1];
		delete this.storage[--this.size];
		return poppedValue;
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

