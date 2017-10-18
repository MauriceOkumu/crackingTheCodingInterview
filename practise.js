const testArray = [2,3,5,1,7,9,6,8,4,11,10];

const quick = (arr) => {
  if (arr.length < 2) {return arr ; };
  let left = [];
  let right = [];
  let pivot = arr.splice(arr.length -1,1);
  for (let i = 0; i < arr.length; i++) {
  	arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quick(left),...pivot,...quick(right)];
}

const merge = (arr) => {

  if (arr.length < 2) {return arr ; };

  let mid =  Math.floor(arr.length / 2)
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  // console.log(right)
  let soLeft = merge(left);
  let soRight = merge(right);
  
  stich = (l, r) => {
  	let res = [];
  	while(l.length && r.length) {
  		l[0] < r[0] ? res.push(l.shift()) : res.push(r.shift());
  	}
  	return [...res,...l,...r]

  }

 
  return stich (soLeft, soRight);
};


const insert = (arr) => {
  for ( var i = 1; i < arr.length; i++) {
  	for (var j = 0; j < i; j++) {
  		if (arr[i] < arr[j]) {
  			var temp = arr.splice(i, 1);
  			arr.splice(j, 0,...temp);
  		}
  	}
  }	
  return arr;	
};

const bubble = (arr) => {
  do{
  	var swap = false;
  	for (var i = 0; i < arr.length; i++) {
  		if (arr[i + 1] < arr[i]) {
  			var temp = arr[i];
  			arr[i] = arr[i + 1];
  			arr[i + 1] = temp;
  			swap = true;
  		}
  	}
  }while(swap);
  return arr;
};

const selection = (arr) => {
  swap = (a, f, l) => {
  	var temp = a[f];
  	a[f] = a[l];
  	a[l] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
  	var min = i;
  	for (let j = i - 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
      	min = j;
      }
  	}
  	swap(arr, i, min)
  }
  return arr;
}

console.log(selection(testArray));