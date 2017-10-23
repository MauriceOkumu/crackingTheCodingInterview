// const testArray = [2,3,5,1,7,9,6,8,4,11,10];

// const quick = (arr) => {
//   if (arr.length < 2) {return arr ; };
//   let left = [];
//   let right = [];
//   let pivot = arr.splice(arr.length -1,1);
//   for (let i = 0; i < arr.length; i++) {
//   	arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
//   }
//   return [...quick(left),...pivot,...quick(right)];
// }

// const merge = (arr) => {

//   if (arr.length < 2) {return arr ; };

//   let mid =  Math.floor(arr.length / 2)
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid, arr.length);
//   // console.log(right)
//   let soLeft = merge(left);
//   let soRight = merge(right);
  
//   stich = (l, r) => {
//   	let res = [];
//   	while(l.length && r.length) {
//   		l[0] < r[0] ? res.push(l.shift()) : res.push(r.shift());
//   	}
//   	return [...res,...l,...r]

//   }

 
//   return stich (soLeft, soRight);
// };


// const insert = (arr) => {
//   for ( var i = 1; i < arr.length; i++) {
//   	for (var j = 0; j < i; j++) {
//   		if (arr[i] < arr[j]) {
//   			var temp = arr.splice(i, 1);
//   			arr.splice(j, 0,...temp);
//   		}
//   	}
//   }	
//   return arr;	
// };

// const bubble = (arr) => {
//   do{
//   	var swap = false;
//   	for (var i = 0; i < arr.length; i++) {
//   		if (arr[i + 1] < arr[i]) {
//   			var temp = arr[i];
//   			arr[i] = arr[i + 1];
//   			arr[i + 1] = temp;
//   			swap = true;
//   		}
//   	}
//   }while(swap);
//   return arr;
// };

// const selection = (arr) => {
//   swap = (a, f, l) => {
//   	var temp = a[f];
//   	a[f] = a[l];
//   	a[l] = temp;
//   }

//   for (let i = 0; i < arr.length; i++) {
//   	var min = i;
//   	for (let j = i - 1; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//       	min = j;
//       }
//   	}
//   	swap(arr, i, min)
//   }
//   return arr;
// }

// console.log(selection(testArray));



//Naive
function billTotal(billPretaxPretip) {
  return (billPretaxPretip * .095) + billPretaxPretip + (billPretaxPretip * .15);
}

function range(start, end) {
  var output = [];
  for(var i = start; i < end; i++) {
    output.push(i);
  }
  return output;
}

var person = { name : { first : "Alyssa", middle: "P.", last: "Hacker" }, age : 26 }

function getFullName(obj) {
  if(obj.name.middle !== undefined){
    return obj.name.first + ' ' + obj.name.middle + ' ' + obj.name.last;
  }
  else {
    return obj.name.first + ' ' + obj.name.last;
  }
}

function longestName(people) {
  var longest = 0;
  var result = '';
  var person = people[0]
  people.forEach(function(person)
  {
    var long = getFullName(person).length;
    if (long > longest) {
      longest = long;
      result = person;
    }
  });
  return result;
}
//HOF

function billTotal(bill){
  var tip = bill * 0.15;
  var tax = bill * 0.095;
  return total = tip + tax + bill; 
}

function range(start, end){
  var result = [];
  for(var i = start; i < end; i++){
    result.push(i);
  }
  return result; 
}

function getFullName(obj){
  if(obj.name.middle){
    return obj.name.first + " " +obj.name.middle+ " " +obj.name.last;
  }
  else {
    return obj.name.first + " " + obj.name.last; 
  }
}

function longestName(people) {
return people.reduce(function(acc, next){
  return getFullName(acc).length > getFullName(next).length? acc : next
})
}

//Recursion
const recus = (arr) => {
  // let sum = 0
  return arr.reduce((a, b) => {

    return Array.isArray(b) ?  a+=recus(b) : a += b
  },0)
  // return sum 
}

const closur = (func) => {
  var curr = this;
  return function(){
    return  func.apply(curr, arguments)
  };
};

const sum = (nums) => {
  let sum =0;
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum;
}

const coder = { name :'Melissa', job: 'Coder'};

const greet = function(){
  return this.name + ' is a wonderful ' + this.job;
}
// console.log(greet.call(coder))
var test = [1,2,3,4,5,6,7]
var test2 = [[[1, 2, 3, [[4, 5], 6], 9, 10]]]

// console.log(closur(recus)(test2));
// console.log(sum(test));
