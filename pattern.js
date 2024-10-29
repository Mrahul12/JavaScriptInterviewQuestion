// *==================Pattern Based=========================
// !0.0 Square pattern

function squarePatter(rows){
 for(let i=1;i<=rows;i++){
  let pattern='';
  for(let j=1;j<=rows;j++){
   pattern+='*'
  }
  console.log(pattern);
 }
}
squarePatter(5)

console.log(" ");

function squaresPatter(rows){
 for(let i=1;i<=rows;i++){
  let pattern='';
  for(let j=1;j<=rows;j++){
   pattern+='* '
  }
  console.log(pattern);
 }
}
squaresPatter(5)

console.log(" ");

// !0.1 Hollow Square pattern

function hollowSquarePatter(rows){
 for(let i=0;i<rows;i++){
  let pattern='';
  for(let j=0;j<rows;j++){
   if(i===0||i===rows-1||j===0||j===rows-1){
   pattern+='*'
   }else{
      pattern+= " ";
   }
  }
  console.log(pattern);
 }
}
hollowSquarePatter(5)

console.log(" ");

// ! 01 Right Triangle Pattern

function rightTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let star='';
    for(let j=1;j<=i;j++){
      star+='* ';
    }
    console.log(star);
  }
}
rightTriangle(5);

console.log('  ');

function reRightTriangle(rows) {
  for (let i = rows; i >=1; i--) {
    let star='';
    for(let j=1;j<=i;j++){
      star+='* ';
    }
    console.log(star);
  }
}
reRightTriangle(5);

console.log("  ");

// !02 Align Right Triangle

function alignTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
alignTriangle(5);

console.log("  ");

function reAlignTriangle(rows) {
  for (let i = rows; i >=1; i--) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
reAlignTriangle(5);

console.log("  ");

// !03 Pyramid pattern

function pyramidPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
pyramidPattern(5);

console.log("  ");



function rePyramidPattern(rows) {
  for (let i = rows; i >=1; i--) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
rePyramidPattern(5);

console.log("  ");

// ! 04   Diamond Pattern

function diamondPattern(rows){
    for (let i = 1; i <= rows; i++) {
      let pattern = "";
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
      }
      console.log(pattern);
    }

    for (let i = rows-1; i >=1; i--) {
      let pattern = "";
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
      }
      console.log(pattern);
    }

}
diamondPattern(5)

console.log("  ");

// ! Hourglass Star Pattern

function hoursGlass(rows){
// Upper part
for(let i=rows;i>=1;i--){
 let pattern='';
 for(let j=1;j<=rows-i;j++){
  pattern+=' '
 }
 for(let k=1;k<=(2*i-1);k++){
  pattern+='*'
 }
 console.log(pattern);
}
// lower part
for(let i=1;i<=rows;i++){
 let pattern='';
 for(let j=1;j<=rows-i;j++){
  pattern+=' '
 }
 for(let k=1;k<=(2*i-1);k++){
  pattern+='*'
 }
 console.log(pattern);
}
}
hoursGlass(5);

console.log("  ");

// ! 01 Number Right Triangle Pattern

function numRightTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let star='';
    for(let j=1;j<=i;j++){
      star+=j+' ';
    }
    console.log(star);
  }
}
numRightTriangle(5);

console.log('  ');

function nreRightTriangle(rows) {
  for (let i = rows; i >=1; i--) {
    let star='';
    for(let j=1;j<=i;j++){
      star+=j+' ';
    }
    console.log(star);
  }
}
nreRightTriangle(5);

console.log("  ");

// !02 Align Right Triangle

function nalignTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += k;
    }
    console.log(pattern);
  }
}
nalignTriangle(5);

console.log("  ");

function nreAlignTriangle(rows) {
  for (let i = rows; i >=1; i--) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += k;
    }
    console.log(pattern);
  }
}
nreAlignTriangle(5);

console.log("  ");

// !03 Pyramid pattern

function npyramidPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
      pattern += k;
    }
    console.log(pattern);
  }
}
npyramidPattern(5);

console.log("  ");

function nrePyramidPattern(rows) {
  for (let i = rows; i >=1; i--) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
      pattern += k;
    }
    console.log(pattern);
  }
}
nrePyramidPattern(5);

console.log("  ");

// ! 04   Diamond Pattern

function ndiamondPattern(rows){
    for (let i = 1; i <= rows; i++) {
      let pattern = "";
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += k;
      }
      console.log(pattern);
    }

    for (let i = rows-1; i >=1; i--) {
      let pattern = "";
      for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
      }
      for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += k;
      }
      console.log(pattern);
    }

}
ndiamondPattern(5)

console.log("  ");


// ! Number Based Pattern

function numPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    let number = "";
    for (let k = 1; k <= i; k++) {
      number += k;
    }
    for (let l = i - 1; l >= 1; l--) {
      number += l;
    }
    console.log(pattern+number);
  }
}
numPattern(5);

console.log(" ");

function numDiaPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    let number = "";
    for (let k = 1; k <= i; k++) {
      number += k;
    }
    for (let l = i - 1; l >= 1; l--) {
      number += l;
    }
    console.log(pattern+number);
  }

  for (let i = rows-1; i >=1; i--) {
    let pattern = "";
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }
    let number = "";
    for (let k = 1; k <= i; k++) {
      number += k;
    }
    for (let l = i - 1; l >= 1; l--) {
      number += l;
    }
    console.log(pattern+number);
  }
}


numDiaPattern(5);


console.log("  ");

function hPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let pattern = "";
    for (let j = 0; j < rows - i; j++) {
      pattern += " ";
    }
    for (let k = 0; k < 2 * i +1; k++) {
     if(k===0||k===2*i||i===rows-1){
      pattern += "*";
     }else{
      pattern+=' '
     }
    }
    console.log(pattern);
  }
}
hPyramid(5);

console.log("  ");



// 1.
// *****
// *****
// *****
// *****
// *****

// 2.
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// 3.
// *****
// *   *
// *   *
// *   *
// *****

// 4.
// *
// * *
// * * *
// * * * *
// * * * * *

// 5.
// * * * * *
// * * * *
// * * *
// * *
// *

// 6.
//     *
//    **
//   ***
//  ****
// *****

// 7.
// *****
//  ****
//   ***
//    **
//     *

// 8.
//     *
//    ***
//   *****
//  *******
// *********


// 9.
// *********
//  *******
//   *****
//    ***
//     *

// 9.
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// 10.
// *********
//  *******
//   *****
//    ***
//     *
//     *
//    ***
//   *****
//  *******
// *********


//* 11.

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


//* 12.

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

//* 13.

//     1
//    12
//   123
//  1234
// 12345

//* 14.

// 12345
//  1234
//   123
//    12
//     1

//* 15.

//     1
//    123
//   12345
//  1234567
// 123456789

// *16.

// 123456789
//  1234567
//   12345
//    123
//     1

//* 17.

//     1
//    123
//   12345
//  1234567
// 123456789
//  1234567
//   12345
//    123
//     1

// *18. 

//     1
//    121
//   12321
//  1234321
// 123454321

//* 19.

//     1
//    121
//   12321
//  1234321
// 123454321
//  1234321
//   12321
//    121
//     1

// 20.

//      *
//     * *
//    *   *
//   *     *
//  *********