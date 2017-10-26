 const testArray = [2,3,5,1,7,9,6,8,4,11,10];

 const selection = (arr) => {
  swap = (c , fi, la) => {
    let temp = c[fi];
    c[fi] = c[la];
    c[la] = temp;
  }
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for(let j = i + 1; j < arr.length; j++) {
     if(arr[j] < arr[min]) {
       min = j
     }
   }
   swap( arr, i, min)
 }
 return arr;
};

const quick = (arr) => {
  if (arr.length) { return arr;};
  let left = [];
  let right = [];
  let pivot = arr.splice(arr.length - 1, 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  return [...quick(left),...pivot,...quick(right)];
};

const merge = (arr) => {
  if (arr.length < 2) { return arr; };

  const left = arr.splice(0, Math.floor(arr.length / 2));
  const sortLeft = merge(left);
  const sortRight = merge(arr);

  stich = (l, r) => {
    let results = [];
    while(l.length && r.length) {
      l[0] < r[0] ? results.push(l.shift()) : results.push(r.shift());
    }
    return [...results,...l,...r];
  }
  return stich (sortLeft, sortRight);
};

const bubble = (arr) => {
  do {
    var swap = false;
    for (let i = 0; i< arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  }while(swap);
  return arr;

};

const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr.splice(i, 1);
        arr.splice(j, 0,...temp);
      }
    }
  }
  return arr;
}


// console.log('Selection ',selection(testArray));
// console.log('quick ',quick(testArray));
// console.log('Merge ',merge(testArray));
// console.log('Bubble ',bubble(testArray));
// console.log('Insertion ',insertion(testArray));



































// //Naive
// function billTotal(billPretaxPretip) {
//   return (billPretaxPretip * .095) + billPretaxPretip + (billPretaxPretip * .15);
// }

// function range(start, end) {
//   var output = [];
//   for(var i = start; i < end; i++) {
//     output.push(i);
//   }
//   return output;
// }

// var person = { name : { first : "Alyssa", middle: "P.", last: "Hacker" }, age : 26 }

// function getFullName(obj) {
//   if(obj.name.middle !== undefined){
//     return obj.name.first + ' ' + obj.name.middle + ' ' + obj.name.last;
//   }
//   else {
//     return obj.name.first + ' ' + obj.name.last;
//   }
// }

// function longestName(people) {
//   var longest = 0;
//   var result = '';
//   var person = people[0]
//   people.forEach(function(person)
//   {
//     var long = getFullName(person).length;
//     if (long > longest) {
//       longest = long;
//       result = person;
//     }
//   });
//   return result;
// }
// //HOF

// function billTotal(bill){
//   var tip = bill * 0.15;
//   var tax = bill * 0.095;
//   return total = tip + tax + bill; 
// }

// function range(start, end){
//   var result = [];
//   for(var i = start; i < end; i++){
//     result.push(i);
//   }
//   return result; 
// }

// function getFullName(obj){
//   if(obj.name.middle){
//     return obj.name.first + " " +obj.name.middle+ " " +obj.name.last;
//   }
//   else {
//     return obj.name.first + " " + obj.name.last; 
//   }
// }

// function longestName(people) {
// return people.reduce(function(acc, next){
//   return getFullName(acc).length > getFullName(next).length? acc : next
// })
// }

// //Recursion
// const recus = (arr) => {
//   // let sum = 0
//   return arr.reduce((a, b) => {

//     return Array.isArray(b) ?  a+=recus(b) : a += b
//   },0)
//   // return sum 
// }

// const closur = (func) => {
//   var curr = this;
//   return function(){
//     return  func.apply(curr, arguments)
//   };
// };

// const sum = (nums) => {
//   let sum =0;
//   for(var i = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
//   return sum;
// }

// const coder = { name :'Melissa', job: 'Coder'};

// const greet = function(){
//   return this.name + ' is a wonderful ' + this.job;
// }
// // console.log(greet.call(coder))
// var test = [1,2,3,4,5,6,7]
// var test2 = [[[1, 2, 3, [[4, 5], 6], 9, 10]]]

// // console.log(closur(recus)(test2));
// // console.log(sum(test));



var salesTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
{name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: '$1668'},
{name: {first: 'Denese', last: 'Dossett'}, age: 29, sales: '$9248'},
{name: {first: 'Douglas', last: 'Denney'}, age: 53, sales: '$5058'},
{name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
{name: {first: 'Herman', last: 'Hazell'}, age: 25, sales: '$2746'},
{name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: '$474'},
{name: {first: 'Hwa', last: 'Heidt'}, age: 53, sales: '$9607'},
{name: {first: 'Hyon', last: 'Hampshire'}, age: 46, sales: '$13598'},
{name: {first: 'Issac', last: 'Ingerson'}, age: 45, sales: '$5225'},
{name: {first: 'Jeraldine', last: 'Joplin'}, age: 39, sales: '$2891'},
{name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
{name: {first: 'Joleen', last: 'Jolin'}, age: 45, sales: '$15736'},
{name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
{name: {first: 'Magda', last: 'Mireles'}, age: 18, sales: '$1498'},
{name: {first: 'Mistie', last: 'Montealegre'}, age: 31, sales: '$6920'},
{name: {first: 'Nancy', last: 'Napoli'}, age: 49, sales: '$5255'},
{name: {first: 'Regine', last: 'Rohrbaugh'}, age: 33, sales: '$7881'},
{name: {first: 'Rolando', last: 'Riebel'}, age: 35, sales: '$8573'},
{name: {first: 'Scarlett', last: 'Stagg'}, age: 36, sales: '$7126'},
{name: {first: 'Sherron', last: 'Strawn'}, age: 36, sales: '$8848'},
{name: {first: 'Susan', last: 'Shilling'}, age: 29, sales: '$8542'},
{name: {first: 'Tama', last: 'Tworek'}, age: 16, sales: '$9200'},
{name: {first: 'Tonisha', last: 'Taunton'}, age: 41, sales: '$5219'},
{name: {first: 'Vergie', last: 'Villescas'}, age: 25, sales: '$8712'}];

//Fullname helper function
const fullName = (obj) => {
 return obj.first + " " + obj.last;
}
//Return full name of teenagers
const isTeenager = (team) => {
  return team.filter((obj) => {
    return obj.age < 20;
  }).map((e) => fullName(e.name));
}

const oldest = (team) => {
 let arr = team.map((e) => {
  return e.age
}).sort((a, b) => {
  return a - b
})
return team.filter((e) => {
  return e.age === arr[arr.length - 1]
}).map(e => 'The oldest person is ' + fullName(e.name)).join('')
}
//Full names with more than 10000 in sales
const tenThousandClub = (team) => {
  return team.filter((e) => {
    return Number(e.sales.slice(1)) > 10000;
  }).map(e => fullName(e.name))
};

function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
  } else {
    console.log('Test ['+testName+'] failed: expected ', expected, ' but got, ', actual );
  }
}

// assertObjectsEqual(isTeenager(salesTeam), ["Earline Erickson", "Jin Jeffrey", "Magda Mireles", "Tama Tworek"], "Should return a list of all teenagers on the Sales Team");

// console.log(isTeenager(salesTeam))
// console.log(oldest(salesTeam))
// console.log(tenThousandClub(salesTeam))










