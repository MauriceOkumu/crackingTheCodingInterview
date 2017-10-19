class MinStack {
  constructor() {
  	this.min = undefined;
  	this.storage = {};
  	this.size = 0;
  }
  add (value) {
    this.storage[this.size++] = value;
    this.addMin(value);
    this.addToMin();
  }
  addMin (value) {
   this.min === undefined ? this.min = value : null; 
   this.min > value ? this.min = value : '';
  }
  pop() {
  	var t = this.storage[this.size - 1]
     delete this.storage[--this.size]
  	 t === this.min ? this.min = Object.values(this.storage).sort()[0] :'';
  	return t;
  }
  addToMin () {
  	return this.min;
  }
};

