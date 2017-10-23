//CHECK TO SEE IF A STRING IS MADE UP OF ONLY UNIQUE CHARACTERS
const uniqStrings = (str) => {	
	var count = 0
	var obj = {};
	str = str.replace(/\s/g, '')
   //BRUTE FORCE
  // for( var i = 0; i < str.length; i++) {
  // 	debugger;
  // 	if(obj[str[i]] === undefined) {
  //      obj[str[i]] = str[i]
  // 	}else{
  // 		count++
  // 		return;
  // 	}
  // }

 //NO EXTRA SPACE
 for (var i = 0; i < str.length; i++) {
 	for (var j = 1; j < i; j++) {
 		if (str[i] === str[j]) {
 			count++;
 			break;
 		}
 	}
 }

 return !count  ? true : false;
};

//CHECK TO SEE IF ONE STRING IS A PERMUTATION OF THE OTHER
const checkPermutation = (str, str2) => {
	var flag = false;
	for (var i = 0; i < str2.length; i++){
		if(str.length === str2.length && str.indexOf(str2[i]) !== -1) {
			// console.log(str2[i]);
			flag = true;
		}
	}
	return flag;
};
//REPLACE SPACES IN A STRING WITH %20
// console.log(checkPermutation('ninja', 'nninj'))
const replaceWith20  = (str) => str.trim().replace(/\s/g, '%20');

// console.log(replaceWith20('Mr John Smith      '));

