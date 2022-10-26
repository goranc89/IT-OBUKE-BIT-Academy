"use strict";
// function sumTwo(first, second) {
//   var rezultat = first + second;
//   return rezultat;
// }
// var rezultatSabiranja = sumTwo(5, 127);

// // console.log(rezultatSabiranja);

// function sumTree() {
//   var rezultat = 1 + 2 + 3;
//   return rezultat;
// }

// console.log(sumTree());

// console.log(parseInt("23.788"));

// console.log(parseFloat("23.345"));

// console.log(isNaN(25));
// console.log(isNaN("25"));
// console.log(isNaN("nanaaa"));
// console.log(isNaN("NaN"));

// console.log(isFinite("nan"));

// 1. Write a program that calculates the maximum of two given numbers.

// function sum(a, b) {
//   if (a > b) {
//     result = a;
//   } else {
//     result = b;
//   }
//   return result;
// }

// console.log(sum(7, 5));

// 2. Write a program that checks if a given number is odd.

// function num(a) {
//   if (a % 2 == 0) {
//     result = "Number is even";
//   } else {
//     result = "Number is odd";
//   }
//   return result;
// }

// console.log(num(6));

// 3. Write a program that checks if a given number is a three digit long number.

// function num(a) {
//   if (a > 99 && a < 1000) {
//     result = "Its 3 digit number";
//   } else {
//     result = "Its not 3 digit number";
//   }
// }

// num(102);

// console.log(result);

////////////////////////////////
// Alternativa za zadatak broj 3: prebacis broj u string, proveris kolika je duzina stringa :) 
///////////////////////////////



// 4. Write a program that calculates an arithmetic mean of four numbers.

// function sum(a, b, c, d) {
//   let result = a + b + c + d / 4;
//   return result;
// }


////////////////////////
// Ovo je matematicki netacna funkcija jer nema zagrade. Racunace ti kao a + b + c + (d/4). Trebao si da stavis zagrade, jer je deljenje starije od sabiranja :)
///////////////////////


// console.log(sum(2, 2, 2, 2));



// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****

// function sum(num) {
//   let result1 = "";
//   let result2 = "";
//   let zvezdica = "*";
//   let prazno = "*" + " " + "*";

//   // let proba = "";

//   for (let i = 0; i < num; i++) {
//     result1 += zvezdica;
//   }
//   for (let i = num; i <= num; i++) {
//     result2 += prazno;
//   }

//   return `${result1}\n${result2}\n${result2}\n${result2}\n${result1}`;
// }

// console.log(sum(5));

////////////////////////////
// Ovaj ti je tacan, malo si ga zakomplikovao :) Probaj da ga uprostis ako mozes, ako ne onda ces se kad tad setiti prostijeg resenja.
// Isto vazi i za zadatak broj 6.
////////////////////////////



// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

// function sum(a, b, c) {
//   let zvezdica = "*";
//   let result1 = "";
//   let result2 = "";
//   let result3 = "";

//   for (let i = 0; i < a; i++) {
//     result1 += zvezdica;
//   }

//   for (let n = 0; n < b; n++) {
//     result2 += zvezdica;
//   }
//   for (let t = 0; t < c; t++) {
//     result3 += zvezdica;
//   }

//   return `${result1}\n${result2}\n${result3}`;
// }

// console.log(sum(5, 3, 7));

// 7. Write a program that calculates a number of digits of a given number.

// function prog(num) {
//   let result = num.toString();

//   return result.length;
// }

// console.log(prog(7895));

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// function sum(arr, num) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       result.push(arr[i]);
//     }
//   }

//   return result.length;
// }

// console.log(sum([2, 4, 7, 8, 7, 7, 1], 7));

// 9. Write a program that calculates the sum of odd elements of a given array.

// function sum(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//     } else {
//       result += arr[i];
//     }
//   }
//   return result;
// }

// console.log(sum([1, 2, 3, 4, 5, 6]));

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

// function word(letter, num) {
//   let result = "";

//   for (let i = 0; i < letter.length; i++) {
//     if (num.toUpperCase() == letter[i] || num.toLowerCase() == letter[i]) {
//       result += letter[i];
//     }
//   }

//   return result.length;
// }

// console.log(word("andrijaA", "a"));

// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

// function word(letter, num) {
//   let result = "";

//   for (let i = 0; i < num; i++) {
//     result += letter;
//   }

//   return result;
// }

// console.log(word("adc", 4));
