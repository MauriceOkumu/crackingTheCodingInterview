// const testCase = [1,3,4,5,6,2,8,34,9,26,90,42];

/*For this problem, you are given N days of average home sale price data, and a fixed window size K . 
For each window of K days, from left to right, find the number of increasing subranges within 
the window minus the number of decreasing subranges within the window.

A window of days is defined as a contiguous range of days. 
Thus, there are exactly N-K+1 windows where this metric needs to be computed. 
An increasing subrange is defined as a contiguous range of indices [a,b], a < b , 
where each element is larger than the previous element. 
A decreasing subrange is similarly defined, except each element is smaller than the next.
Constraints

1 ≤ N ≤ 200,000 days
1 ≤ K ≤ N days
Input Format

Your solution should accept an input file (input.txt) with the following contents: 

 Line 1: Two integers, N and K.
 Line 2: N positive integers of average home sale price, each less than 1,000,000.
Output Format

Your solution should output one integer for each window’s result, 
with each integer on a separate line, to an output file or to the console.

Sample Input

5 3
188930 194123 201345 154243 154243
Sample Output

3
0
-1
Explanation

For the first window of [188930, 194123, 201345], there are 3 increasing subranges 
([188930, 194123, 201345], [188930, 194123], and [194123, 201345]) and 0 decreasing, 
so the answer is 3. For the second window of [194123, 201345, 154243], 
there is 1 increasing subrange and 1 decreasing, so the answer is 0. 
For the third window of [201345, 154243, 154243], 
there is 1 decreasing subrange and 0 increasing, so the answer is -1.
Performance

Your solution should run in less than 30 seconds and use less than 50MB 
of memory with a valid input of any size (within the given constraints).




*/
   //INPUT
//An array full of integers
//A window in which to find contigous increase or decrease

//OUTPUT
//Integers , each in a new line, denoting the output of each window

//Create a subranges array
// loop through the input array
//Store all possible subranges in the subranges array
//We should have a way of keeping the count of either decreasing or increasing subranges
//Check each subrange in or=der keeping track of increase and decrease
//get the difference between the two
//Return the result, each on a new line, for all subranges



const computeMetrics = (n, k) => {

  getResult =(array, n) => {
    //GENERATING SEQUENCES
    var sequencesArray = [[]];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0, len = sequencesArray.length; j < len; j++) {
        sequencesArray.push(sequencesArray[j].concat(array[i]));
      }
    };

    let hash = {};
    let tempResults = [];
    let rawData = sequencesArray.filter((subArray => subArray.length === n));

    //STORING SUBARRAYS BY SEQUENCE
    rawData.forEach((val) => {
      if ( hash[val[0]] === undefined) {
        hash[val[0]] = val
        tempResults.push(val);
      } 
    });
    return tempResults;
  };

    //COMPARE FUNCTIONALITY

    returnDifference = (sequencedArray) => {
      let trackDiffs = {}
      trackDiffs.decreaseDifference = 0;
      trackDiffs.increaseDifference = 0;

      for (let i = 0; i < sequencedArray.length; i++) {
        sequencedArray[i] < sequencedArray[i + 1] ? trackDiffs.increaseDifference++ : '';  
        sequencedArray[i] > sequencedArray[i + 1] ? trackDiffs.decreaseDifference++ : '';
        };
        //TODO :Need mathematical equation for adding differences. Working only if k is 3 
        trackDiffs.increaseDifference === k-1 ? trackDiffs.increaseDifference++ : null; 
        k - trackDiffs.decreaseDifference === 1 ? trackDiffs.decreaseDifference++ : null;
      
       return trackDiffs.increaseDifference - trackDiffs.decreaseDifference;
     };


     return getResult(n, k).map((value) => {
      return returnDifference(value);
    }).join('\n')
   };



   const test = [188930 ,194123, 201345, 154243, 154243]

   const test2 = [388930 ,294123, 201345, 114243, 54243]


   // console.log(computeMetrics(test2, 3));

var valuesToTestTime = [];
for (var i = 0; i < 20; i++) {
  var randomnumber = Math.ceil(Math.random()*100)
  valuesToTestTime.push(randomnumber)

}
// console.log(computeMetrics(valuesToTestTime, 3));
// console.log('Trying to come up with equation =>:',(2 + 3) % 3)




