// * Array

let arr = [
  10, 20, 30, 40, 30, 100, 200, 500, 600, 70, 300, 20, 10, 50, 60, 60, 70,
];
// let removeDuplicate = [];
// for (let i in arr) {
//   if (arr.indexOf(arr[i]) == i) {
//     removeDuplicate.push(arr[i]);
//   }
// }
// console.log(removeDuplicate);

// /======================================================

// let maximum=arr.reduce((acc,val,ind)=>{
//  return val>acc?val:acc
// })
// console.log(maximum);

// * Using Bussiness logic

// function firstMaximum(arr){
// let firstMax=arr[0];
// for(let i=0;i<arr.length;i++){
//  if(arr[i]>firstMax){
//   firstMax=arr[i];
//  }
// }
// return firstMax;
// }
// let val = firstMaximum(arr);
// console.log(val);

// ====================================================

// function secondMa(arr){
//  let max=0;
//  let secondMax;

// for(let i=0;i<arr.length;i++){
//  if(arr[i]>max){
//   secondMax=max;
//   max=arr[i];
//  }else if(arr[i]>secondMax){
//   secondMax=arr[i]
//  }
// }
// return secondMax;
// }
// console.log(secondMa(arr));

// function thirdMa(arr){
//  let max=0;
//  let secMax=[1];
//  let thirdMax;

// for(let i=0;i<arr.length;i++){
//  if(arr[i]>max){
//   thirdMax=secMax;
//   secMax=max;
//   max=arr[i]
//  }else if(arr[i]>thirdMax){
//   thirdMax=arr[i]
//  }
// }
// return thirdMax;
// }
// console.log(thirdMa(arr));

// function isPrime(val){
//  let count=0;
//  for(let i=0;i<=val;i++){
//   if(val%i==0){
//    count++;
//   }
//  }

//  if(count==2){
//   return 'Prime number';
//  }else{
//   return "Not a Prime number"
//  }

// }
// console.log(isPrime(4));

// *================================================

// let arr17 = [3,1, 4, 5, 7, 9, 11];

// function missingNumber(arr) {
//   let newArray = [];
//   arr.sort((a, b) => a - b);
//   let n = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== n) {
//       newArray.push(n);
//       n++;
//     }
//     n++;
//   }

//   return newArray;
// }
// let res = missingNumber(arr17);
// console.log("All missing element find", res);

//* Remove each second index value
// let arr1=[1,2,3,4,5,6,7,8,9]
// console.log(arr1.filter((val,ind)=>val%2!==0));

