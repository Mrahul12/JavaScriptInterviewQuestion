// // !01 Palindrom of string like aba
// let str1 = "madam";

// function isPalindrome(str) {
//   let len = str.length;
//   if (typeof str !== "string") {
//     return "It is not a string.";
//   }
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return "It is not a palindrome string : " + str;
//     }
//   }
//   return "It is  a palindrome string : " + str;
// }
// let res1 = isPalindrome(str1);
// console.log(res1);

// // ============================================

// let str2 = "abeba";

// function isPalindrome(str) {
//   let palindrome = "";

//   if (typeof str !== "string") {
//     return "It is not a string.";
//   }
//   for (let i = str.length - 1; i >= 0; i--) {
//     palindrome += str[i];
//   }
//   if (palindrome === str) {
//     return "It is  a  palindrome string : " + palindrome;
//   } else {
//     return "It is  a not palindrome string : " + palindrome;
//   }
// }
// let res2 = isPalindrome(str2);
// console.log(res2);

// // ======================================================================

// let str3 = "abeba";

// let palindrome = str3.split("").reverse().join("");
// if (palindrome === str3) {
//   console.log("It is  a  palindrome string : " + palindrome);
// } else {
//   console.log("It is  a not palindrome string : " + palindrome);
// }

// // !02 Find vowel present in the string

// const str4 = "I am Frontend Developer and Designer.";
// const str5 = str4.toLowerCase().split("");

// function checkVowel(str) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   str.map((v) => {
//     if (vowel.includes(v)) {
//       count++;
//     }
//   });
//   return count;
// }
// let res3 = checkVowel(str5);
// console.log(res3);

// // ===========================================
// const str6 = "I am Frontend Developer and Designer.";
// const str7 = str4.toLowerCase().split("");
// function checkVowel(str) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let v1 of str) {
//     for (let v2 of vowel) {
//       if (v1 === v2) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// let res4 = checkVowel(str7);
// console.log(res4);

// // !03 Find the Duplicate character of string.

// let str8 = "abbadefef";
// let str9 = str8.split("");
// function getDuplicate(str) {
//   let duplicateValue = "";
//   str.map((v, ind) => {
//     if (str.indexOf(v) !== ind) {
//       duplicateValue += v;
//     }
//   });
//   return duplicateValue;
// }
// let res5 = getDuplicate(str9);
// console.log(res5);

// // ! Remove Duplicate character

// function getDuplicate(str) {
//   let duplicateValue = "";
//   str.map((v, ind) => {
//     if (str.indexOf(v) == ind) {
//       duplicateValue += v;
//     }
//   });
//   return duplicateValue;
// }
// let res50 = getDuplicate(str9);
// console.log("Remove Duplicate character :", res50);

// // ! 04 Convert UpperCase to LowerCase without using inbuilt method of String.
// // ? ASCII CODE -'A' :65 , ;Z :'91'
// let str10 = "AZAM";
// function upperToLower(str) {
//   let upperToLowerChar = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       let code = str.charCodeAt(i) + 32; //charCodeAt:-convert character to ASCII value
//       let chars = String.fromCharCode(code); //formCharCode:-convert  ASCII value to character
//       upperToLowerChar += chars;
//     }
//   }
//   return upperToLowerChar;
// }
// let res6 = upperToLower(str10);
// console.log(res6);

// // ! 04 Convert lowerCase to upperCase without using inbuilt method of String.
// // ? ASCII CODE -'A' :65 , ;Z :'91'
// let str11 = "saku";
// function lowerToUpper(str) {
//   let lowerChar = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "a" && str[i] <= "z") {
//       let code = str.charCodeAt(i) - 32; //charCodeAt:-convert character to ASCII value
//       let chars = String.fromCharCode(code); //formCharCode:-convert  ASCII value to character
//       lowerChar += chars;
//     }
//   }
//   return lowerChar;
// }
// let res7 = lowerToUpper(str11);
// console.log(res7);

// // !05 CHECK character is even or not

// let str12 = "Hi, developers";
// let str13 = str12.split("");
// function checkEvenOddString(str) {
//   let joined = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "," && str[i] !== " ") {
//       joined += str[i];
//     }
//   }
//   return joined.length % 2 == 0
//     ? "Given String Is Even."
//     : "Given String Is Odd.";
// }
// let res8 = checkEvenOddString(str13);
// console.log(res8);

// // ==========================================================

// let str14 = "Hi, developered";
// let str15 = str14.split("");
// function checkEvenOddStrings(str) {
//   let joined = "";
//   let compare = [",", ".", " ", "!", "@", "#", ",,", "  "];
//   str.map((v) => {
//     if (!compare.includes(v)) {
//       joined += v;
//     }
//   });
//   return joined.length % 2 == 0
//     ? "Given String Is Even."
//     : "Given String Is Odd.";
// }
// let res9 = checkEvenOddStrings(str15);
// console.log(res9);

// // !06 Check Email is valid or not

// let email = "rahul854@gmail.com";
// function checkEmail(emails) {
//   let regeX = "@gmail.com";

//   if (emails.includes(regeX)) {
//     return "Valid Email Id.";
//   } else {
//     return "Unvalid Email Id.";
//   }
// }
// console.log(checkEmail(email));

// // !06 Check UserName is valid or not

// let userName = "Rahul";
// function checkUser(user) {
//   const regeX = "abcdefghijklmnopqrstuvwxyz ".split("");
//   if (user.length >= 2 && user.length <= 15) {
//     const users = user.toLowerCase().split("");
//     let show;
//     users.map((v) => {
//       if (regeX.includes(v)) {
//         show = "Valid UserName.";
//       } else {
//         show = "Unvalid UserName(no accept alphanumeric).";
//       }
//     });
//     return show;
//   } else {
//     return "Enter the name at least 2 char and maximum 15";
//   }
// }

// console.log(checkUser(userName));

// // !06 Check Number is valid or not

// let number = "8102455889";

// function checkNumber(num) {
//   const regeX = "0123456789 ".split("");
//   const numbers = num.split("");
//   let shows;
//   if (num.length == 10) {
//     numbers.map((v) => {
//       if (regeX.includes(v)) {
//         shows = "Valid Mobile Number.";
//       } else {
//         shows = "Invalid Mobile Number(only numeric value).";
//       }
//     });
//     return shows;
//   } else {
//     return "Please Enter 10-digit number for Mobile Number.";
//   }
// }

// console.log(checkNumber(number));

// // !================toString()==>convert to array to string

// let arr = ["h", "e", "l", "l", "o"];
// console.log(arr.toString()); //h,e,l,l,o
// console.log(true == true);

// // ! Each Word of first letter should be CapitalLetter and remain smallLetter
// let str16 = "Hello devElOper hOw cAn hELp yOu.";
// function firstLetterCap(str) {
//   let wordArr = str.split(" "); // split convert string to array format.
//   for (let i in wordArr) {
//     let firstLetter = wordArr[i].split("")[0].toUpperCase();
//     let remainLetter = wordArr[i].slice(1).toLowerCase();
//     wordArr[i] = firstLetter + remainLetter;
//   }
//   return wordArr.join(" "); // split convert array to string format.
// }
// let res10 = firstLetterCap(str16);
// console.log(res10);

// // !split
// let str17 = "Hello";
// console.log(str17.split()); //Array [ "Hello" ]
// console.log(str17.split([])); //Array [ "Hello" ]
// console.log(str17.split("l")); //Array(3) [ "He", "", "o" ]
// console.log(str17.split("")); //Array(5) [ "H", "e", "l", "l", "o" ]
// console.log(str17.split(" ")); //Array(5) [ "Hello" ]
// console.log(str17.split({})); //Array(5) [ "Hello" ]
// let splits = str17.split("");
// console.log(splits.join("-"));

// //! Q2  = Reverse the each word in the string
// let str18 =
//   "Mahendra Singh Dhoni is one of the most popular cricketers of India who captained the team from 2007 to 2016";

// function wordReverseOnly(str19) {
//   let wordReverse = str19.split(" ");
//   for (let i = 0; i < wordReverse.length; i++) {
//     wordReverse[i] = wordReverse[i].split("").reverse().join("");
//   }
//   return wordReverse.join(" ");
// }
// let res11 = wordReverseOnly(str18);
// console.log(res11);

// // ! Count how many 'm' available
// let str19 =
//   "Mahendra Singh Dhoni is one of the most popular cricketers of India who captained the team from 2007 to 2016";
// console.log(
//   str19
//     .toLowerCase()
//     .split("")
//     .reduce((acc, value) => {
//       if (value == "m") acc++;
//       return acc;
//     }, 0)
// );

// // ! fIND THE LARGEST WORD IN A SCENTENCE
// const str20 = "Hey I am Frontend Developer";

// function largestWord(str) {
//   const words = str.split(" ");
//   let maxLength = 0;
//   let largestWord = "";
//   words.forEach((word) => {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       largestWord = word;
//     }
//   });

//   return largestWord;
// }
// console.log("Largest word is : ", largestWord(str20));

// //!=============================
// let str21 = str20.split(" ");
// let wordLength = 0;
// let largestWords = "";
// for (let val of str21) {
//   if (val.length > wordLength) {
//     wordLength = val.length;
//     largestWords = val;
//   }
// }
// console.log(largestWords);
