class StackOfPlates {
  constructor() {
  	this.storage = {};
    this['stacksOfPlates'] = [];
  	this.size = 0;
    this.capacity = 3;
    this.stackSize = 0;
  }
  add (value) {

    if(this.capacity > this.size ) {
      this.storage[this.size++] = value 
      } else {
      this.stacksOfPlates.push(this.storage);
      this.storage = {};
      this.size = 0;
      this.storage[this.size++] = value ;
    }
    this.stackSize++
  }
  
  pop() {
    if (this.size === 0 && this.stacksOfPlates.length === 0) { return 'Stack is empty'}
    if (this.size === 0 && this.stacksOfPlates.length) { 
      this.storage = this.stacksOfPlates.pop();
      this.size = this.capacity;
    }

   return this.deleteValue();
  }

  deleteValue () {
    var t = this.storage[this.size - 1]
     delete this.storage[--this.size];
     this.stackSize--;
    return t;
  }
};



// console.log(test.pop())