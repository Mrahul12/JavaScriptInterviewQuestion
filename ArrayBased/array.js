// // !01  Question===================
// const arr1 = [10, 20, 30, 40];
// // ! Access index of array
// for (let i in arr1) {
//   console.log(i);
//   console.log(arr1[i]);
// }
// // ! Access value of array
// for (let val of arr1) {
//   console.log(val);
// }

// // !02 Question=====================
// // ? Reverse Array
// // todo Bussiness Logic of Reverse array
// const arr2 = [];
// for (let i = arr1.length - 1; i >= 0; i--) {
//   arr2.push(arr1[i]);
// }
// console.log(arr2);
// // todo By Array method
// let arr3 = [];
// arr1.map((val) => {
//   arr3.unshift(val);
// });
// console.log(arr3);

// // !03 Remove Duplicate array element

// let arr4 = [10, 20, 10, 20, 30, 40, 50, 60, 60];
// const arr5 = [];
// arr4.map((val, index) => {
//   if (arr4.indexOf(val) === index) {
//     arr5.push(arr4[index]);
//   }
// });
// console.log(arr5);

// arr4.filter((val, index) => {
//   if (arr4.indexOf(val) === index) {
//     arr5.push(arr4[index]);
//   }
// });
// console.log(arr5);

// let uniqueArr = [];

// for (let i = 0; i < arr4.length; i++) {
//   if (!uniqueArr.includes(arr4[i])) {
//     uniqueArr.push(arr4[i]);
//   }
// }
// console.log(uniqueArr);

// let uniqueArrr = new Set(arr4);
// console.log([...uniqueArrr]);

// // !04 Get output only Boolean

// const arr6 = [10, 20, "mukesh", true, "Rohan", false, "Rashi", true, false, 60];
// const arr7 = arr6.filter((val) => {
//   if (typeof val === "boolean") return true;
// });
// console.log(arr7);
// const arr8 = arr6.filter((val) => {
//   if (typeof val === "number" || typeof val === "string") return true;
// });
// console.log(arr8);

// //!05 reduce((accumulator,val,index,array)=>{}.initial_value)==>return at last iteration
// // ? Find max and min elements in array using reduce

// let arr9 = [10, 20, 30, 500, 40, 50, 100];

// const maximum = arr9.reduce((acc, val, index) => {
//   //console.log(acc);
//   return val > acc ? val : acc;
// });
// const minimum = arr9.reduce((acc, val, index) => {
//   //console.log(acc);
//   return val < acc ? val : acc;
// });
// console.log("Maximum Value : ", maximum);
// console.log("Minimum Value : ", minimum);

// // !06 Find Second Maximum number

// let arr10 = [10, -20, 30, 40, -50, 50, 200, 20, 60, 100];

// let secondMax;
// let max = 0;
// for (let i = 0; i < arr10.length; i++) {
//   if (arr10[i] > 0) {
//     if (arr10[i] > max) {
//       secondMax = max;
//       max = arr10[i];
//     } else if (arr10[i] > secondMax) {
//       secondMax = arr10[i];
//     }
//   }
// }

// console.log("Second maximum number:", secondMax);

// let arr11 = arr10.sort((a, b) => b - a);
// console.log("Second maximum number:", arr11[1]);

// // !07 Find Second Minimum number

// let arr12 = [10, -20, 30, 40, -50, 50, 200, 20, 60, 100,-10];

// let secondMin;
// let min = 0;
// for (let i = 0; i < arr12.length; i++) {
//   if (arr12[i] < min) {
//     secondMin = min;
//     min = arr12[i];
//   } else if (arr12[i] < secondMin) {
//     secondMin = arr12[i];
//   }
// }

// console.log("Second minimum number:", secondMin);

// let arr13 = arr12.sort((a, b) => a - b);
// console.log("Second smallest or minimum number:", arr13[1]);

// // !08 sum of array elements inside array

// let arr14 = [[10, 20, 30], [40, 50], 60, [70], 80, 90];
// let sum = 0;
// for (let val of arr14) {
//   if (Array.isArray(val) === true) {
//     for (let vals of val) {
//       sum += vals;
//     }
//   }
// }
// console.log(sum);

// // !  Get Prime Number

// let arr15 = [2, -3, 4, 5, 56, 6, 9, 15, 11, 17];

// let arr166 = [];
// for (val of arr15) {
//   let count = 0;
//   for (i = 0; i <= val; i++) {
//     if (val % i == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     arr166.push(val);
//   }
// }
// console.log(arr166);

// // ! Find the missing number of array

// let arr16 = [1, 2, 3, 4, 5, 7];

// function missingNumber(arr) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     // let newArray=[];
//     let n = i + 1;
//     if (n == arr[i]) {
//       continue;
//     } else {
//       return n;
//     }
//   }
// }
// let results = missingNumber(arr16);
// console.log("Only One missing element find", results);

// let arr17 = [1, 3, 4, 5, 7, 9, 11];
// function missingNumber(arr) {
//   let newArray = [];
//   arr.sort((a, b) => a - b);
//   let n = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     while (arr[i] !== n) {
//       newArray.push(n);
//       n++;
//     }
//     n++;
//   }

//   return newArray;
// }
// let res = missingNumber(arr17);
// console.log("All missing element find", res);

// let arr178 = [5, 7, 9, 11, 15, 17];
// let n1 = 2;
// for (let i = 0; i < arr178.length; i++) {
//   let next = arr178[i] + n1;
//   if (arr178[i + 1] !== next) {
//     console.log("Find Next Missing Number : ", next);
//     break;
//   }
// }

// // ! count the number of occurences in a sorted array
// // ! where n=7,X=2 ===> X means how many time 'x' is occur on array , n is length of array

// let arr18 = [1, 2, 2, 2, 2, 3];
// let n = 7;
// let x = 2;
// function occurrNumber(arr, n, x) {
//   let arrLenth = n;
//   let count = 0;
//   for (let i = 0; i < arrLenth; i++) {
//     if (arr[i] == x) {
//       count++;
//     }
//   }
//   return count;
// }
// let ress = occurrNumber(arr18, n, x);
// console.log(ress);

// // ! Move all the negative element onside
// // todo arr19 = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// // todo output = [-12, -13, -5, -7, -3, -6,11,6,5];

// let arr19 = [-12, 11, -13, -5, 6, -7, 5, -3, -6, 20];
// function negativeOnside(arr) {
//   let arr20 = [];
//   for (let v of arr) {
//     if (v > 0) {
//       arr20.push(v);
//     }
//   }
//   for (let vs of arr) {
//     if (vs < 0) {
//       arr20.unshift(vs);
//     }
//   }
//   return arr20;
// }
// let resss = negativeOnside(arr19);
// console.log(resss);

// //====================================

// function negativeOnside(arr) {
//   let arr20 = [];
//   for (let v of arr) {
//     if (v > 0) {
//       arr20.push(v);
//     } else if (v < 0) {
//       arr20.unshift(v);
//     }
//   }

//   return arr20;
// }
// let rest = negativeOnside(arr19);
// console.log(rest);

// // !Find Union and Intersection of two sorted array

// let arr21 = [1, 3, 4, 5, 7];
// let arr22 = [2, 3, 5, 6];
// // output union==[1,2,3,4,5,6,7]
// // output intersection==[3,5]

// function uninon(arr, arr1) {
//   let v = [...new Set([...arr, ...arr1])];
//   return v;
// }
// let guess = uninon(arr21, arr22);
// console.log(guess.sort((a, b) => a - b));
// // ====================================
// function union(arr, arr1) {
//   let unionArr = [];
//   let arrays = [...arr, ...arr1];
//   arrays.map((v, i) => {
//     if (arrays.indexOf(v) == i) {
//       unionArr.push(arrays[i]);
//     }
//   });
//   return unionArr;
// }
// let guesss = union(arr21, arr22);
// console.log(guesss.sort());
// // ===============================================

// function interSec(arr, arr1) {
//   let intersecArr = [];
//   let a, b;
//   for (let i = 0; i < arr.length; i++) {
//     a = arr[i];
//     for (let j = 0; j < arr1.length; j++) {
//       b = arr1[j];
//       if (a == b) {
//         intersecArr.push(a);
//       }
//     }
//   }
//   return intersecArr;
// }
// let interS = interSec(arr21, arr22);
// console.log(interS);

// // optimization code

// function interSecs(arr, arr1) {
//   let sets = new Set(arr);
//   //  sets.has() ---->used to check whether an element with a specified value exists in a Set or not -- return boolean value
//   return arr1.filter((v) => sets.has(v));
// }
// let interSe = interSecs(arr21, arr22);
// console.log(interSe);

// // ===================================
// // ! FIND the even number with square

// let arr23 = [0, 1, 2, 3, 4, 5, 6];
// let squareArr = arr23
//   .filter((val) => {
//     if (val !== 0) return val % 2 == 0;
//   })
//   .map((vals) => vals ** 2);
// console.log(squareArr);
// // ! if all numbers are 1 then return true otherwise false

// function getValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(getValue([1, 1, 1, 2, 1])); //==> false
// console.log(getValue([1, 1, 1, 1, 1])); //==> true

// // !arr=[1,2,3,4,5];
// // !console.log(arr)=[1,2,3];
// // !console.log(arr.length); =3;

// let arr24 = [1, 2, 3, 4, 5];
// arr24.pop();
// arr24.pop();
// console.log(arr24);
// console.log(arr24.length);

// arr24.length = 3;
// console.log(arr24);
// console.log(arr24.length);

// console.log(arr24.slice(0, 3));
// console.log(arr24.slice(0, 3).length);

// // ================================================
// function myFun(a, b, c) {
//   return [a, b, c, a, b, c];
// }
// let vs = myFun;
// console.log(vs.length);
// let v = myFun(1, 2, 3);
// console.log(v.length);

// // ! Find Duplicate array element

// let arr25 = [10, 20, 10, 20, 30, 40, 50, 60, 60];
// let arr26 = [];
// arr25.map((val, ind) => {
//   if (arr25.indexOf(val) !== ind) {
//     arr26.push(val);
//   }
// });
// console.log("Get Duplicate Array Element :", arr26);

// // ! Sort array
// // let arr27 = [64, 34, 25, 12, 22, 11, 90];
// let arr27 = [0, 2, 1, 0, 2, 3, 1, 3];

// // way-01
// console.log(arr27.sort((a, b) => a - b));

// // way-02 without using temp veriable

// function swapWithoutTemp(arr) {
//   if (arr.length == 1) return "miniimum two value";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         arr[j] = arr[j] + arr[j + 1];
//         arr[j + 1] = arr[j] - arr[j + 1];
//         arr[j] = arr[j] - arr[j + 1];
//       }
//     }
//   }
//   return arr;
// }
// console.log(swapWithoutTemp(arr27));
// // way-03 with using temp veriable
// function swapWithTemp(arr) {
//   if (arr.length == 1) return "miniimum two value";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j + 1] = arr[j];
//         temp = arr[j + 1];
//       }
//     }
//   }
//   return arr;
// }
// console.log(swapWithTemp(arr27));

// // way-03 with using array destructuring
// function swapWithTemp(arr) {
//   if (arr.length == 1) return "miniimum two value";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(swapWithTemp(arr27));

// // !remove element

// let arr28 = [
//   { id: 1, name: "xyz" },
//   { id: 2, name: "developer" },
//   { id: 3, name: "abc" },
// ];

// // ? Way---01
// console.log(
//   "remove id=2 object :",
//   arr28.filter((val) => val.id !== 2)
// );
// // ? Way---02
// let arr29 = arr28.reduce((acc, val) => {
//   if (val.id !== 2) {
//     acc.push(val);
//   }
//   return acc;
// }, []);
// console.log("remove id=2 object :", arr29);
// // ? Way---03
// let arr30 = [];
// for (let val of arr28) {
//   if (val.id !== 2) {
//     arr30.push(val);
//   }
// }
// console.log("remove id=2 object :", arr30);
// // ? Way---04
// delete arr28[1];
// console.log("remove id=2 object :", arr28);
// console.log("remove id=2 object :", arr28.length);

// // ! sort array according to id

// let arr31 = [
//   { id: 1, name: "xyz" },
//   { id: 2, name: "developer" },
//   { id: 7, name: "abc" },
//   { id: 6, name: "abc6" },
//   { id: 5, name: "abc5" },
//   { id: 4, name: "abc3" },
//   { id: 3, name: "abc4" },
// ];

// console.log(
//   "Sort array by id :",
//   arr31.sort((a, b) => a.id - b.id)
// );

// // !=================================

// let arr32 = [
//   { type: "fruit", name: "Apple" },
//   { type: "veg", name: "cauliflower" },
//   { type: "fruit", name: "Grapes" },
//   { type: "veg", name: 'Baigan' },
//   {type:'fruit',name:'Banana'},
//   {type:'fruit',name:'Mango'},
//   {type:'veg',name:'Tomato'}
// ];

// console.log(arr32.filter(val=>{
//   if(val.type=='fruit'){
//     return val
//   }
// }))
// let arr33=[];
// for(let val of arr32){
//   if(val.type=='fruit'){
//    arr33.push(val)
//   }
// }
// console.log(arr33)
// console.log(arr32.map(val=>{
//   if(val.type=='fruit'){
//     return val
//   }
//   return'here Veg Items';
// }))

// ? given two arrays
const arr1=[1,2,3,4,5,3,4];
const arr2=[2,5,6,7,4,9];

// ? 01  Merge both array means converts into single array
let arr3=[...arr1,...arr2];

// ? Remove the Duplicate Element from Arrays

let arr4=[];
for(let i=0;i<arr3.length;i++){
 if(arr3.indexOf(arr3[i])==i){
  arr4.push(arr3[i])
 }
}
console.log(arr4);
console.log(arr3);

// ? remove each second element from array3
let arr5=arr3.filter((_,ind)=> ind%2==0)
console.log(arr5);

// ? remove each first element from array

console.log(arr3.filter((_,ind)=>ind%2!=0));

