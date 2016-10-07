//key constraint
//  - must be enclosed between 1
//  - must be consecutive to be counted (1001 => 1, 101 => 0)
function solution(N) {
  // write your code in JavaScript (Node.js 6.4.0)
  let strBinary = (N >>> 0).toString(2);
  let arr = strBinary.split(/1/g);
  let maxGap = 0;
  let currentGap = 0;
  let inGap = false;

  //the max length of binary representation of the number in string is 31
  for(let i=0, len = strBinary.length; i < len; i++) {
    if(strBinary[i] == '1' && strBinary[i+1] == '0') {
      // either conclude a gap or start a possible gap
      if (inGap) {
        // gap only valid if it is enclosed ny 1
        maxGap = (maxGap < currentGap)? currentGap : maxGap;
        // end of a gap may also a start of new gap
        inGap = (strBinary[i+1] == '0') ? true : false;
        currentGap = 0;
      }
      else {
        inGap = true;
        currentGap = 0; //reset the gap
      }
    }
    else {
      currentGap ++;
    }
  }
  return maxGap;
}

console.log(largestBinaryGap(1)); // 1 //=> 0
console.log(largestBinaryGap(5)); // 101 //=> 1
console.log(largestBinaryGap(6)); // 110 //=> 1
console.log(largestBinaryGap(16));
console.log(largestBinaryGap(328)); // 101001000 //=> 2
console.log(largestBinaryGap(1024));
console.log(largestBinaryGap(51712)); // 110010100000000 //=> 5
