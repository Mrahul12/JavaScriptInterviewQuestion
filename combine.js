// ? Find max and min elements in array using reduce
let arr9 = [10, 20, 600, 100, -30, 500, 40, 50, 100, -5, 3, -100];

// let maximum=arr9.reduce((acc,val,ind)=>{
//  return val>acc?val:acc;
// })
// console.log('Maximum number find :',maximum);

// ?Find second maximum number in array

// let secondMax;
// let max = 0;

// for (let i=0;i<arr9.length;i++) {
//   if (arr9[i] > 0) {
//     if (arr9[i] > max) {
//       secondMax = max;
//       max = arr9[i];
//     }else if(arr9[i] > secondMax){
//      secondMax=arr9[i];
//     }
//   }
// }
// console.log("Second max ", secondMax);

// ? Find missing number from array
let arr17 = [1, 3, 4, 5, 7, 9, 11];

// function findMissing(arr){
// let missing=[];
// let miss=arr[0];
// for(let i=0;i<arr.length;i++){
//  while(arr[i] !==miss){
//   missing.push(miss)
//   miss++
//  }
//  miss++
// }
// return missing
// }
// let a=findMissing(arr17)
// console.log('Missing number is ',a);

// ! Each Word of first letter should be CapitalLetter and remain smallLetter
let str16 = "Hello devElOper hOw cAn hELp yOu.";

let sentence = str16.split(" ");
for (let i in sentence) {
  let x = sentence[i].split("")[0].toUpperCase();
  let y = sentence[i].slice(1).toLowerCase();
  sentence[i] = x + y;
}
let resultString=sentence.join(' ');
console.log(resultString);

// ? Reverse Each word of sentence of String

let rev=resultString.split(' ');
for(let i in rev){
 rev[i]=rev[i].split('').reverse().join('');
 
}
console.log(rev.join(' '));