// let x = 50;

// while (x < 60) {
//   console.log("X je manje od 60: " + x);
//   x++;
// }

// let x = 10;

// do {
//   console.log("trenutna vrednost x je: " + x);
//   x++;
// } while (x < 10);
// {
//   console.log("X je manje od 10 i iznosi: " + x);
//   x++;
// }

// console.log("Zavrseno");

// let x = 0;

// for (let i = 0; i <= 10; i++) {
//   console.log(i + " ovo je trenutna vrednost");
// }

// Ispisati prvih 20 brojecval brojeve od 15 do 18 ispisati zajedno sa slovom "A"
// for (let i = 0; i <= 20; i++) {
//   if (i > 15 && i <= 18) {
//     console.log(i + " A");
//   } else {
//     console.log(i);
//   }
// }

// console.log("Kraj");

// let x = [1, 2, 10];
// let y = [1, 3, 10, 2];

// for (let i = 0; i < x.length; i++) {
//   // trenutno je 0
//   for (let k = 0; k < y.length; k++) {
//     // izvrsava se 3 puta
//     if (x[i] == y[k]) {
//       console.log("Ovaj element je sadrzan u oba niza : " + x[i]);
//     }
//   }
// }

// let niz = ["10", "B", "C"];

// for (let element in niz) {
//   console.log(element.length);
//   console.log(element.charAt());
//   console.log(element.endsWith());
// }

// 1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   sum += i;
// }

// console.log(sum);

// Zadatak 1

// let broj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i <= broj.length; i++) {
//   sum += i;
// }

// console.log("The sum of natural numbers:", sum);

// 2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.

// let broj = 4;
// let cube = 0;

// for (let i = 0; i <= broj; i++) {
//   cube = i * i * i;
// }

// console.log(cube);

// 3. Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.

// let broj = 5;
// let result = 0;

// for (let i = broj - 1; i >= 1; i--) {
//   result = broj *= i;
// }

// console.log(result);

// 4. Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

// let n = 4;
// let result = n * (n + 1);
// let arr = [];

// for (let i = n * 2; i >= 1; i--) {
//   if (i % 2 == Number.isInteger()) {
//     arr.push(i);
//   }
// }

// console.log(`The even numbers are ${arr} and the sum is ${result}`);

// 5.Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".

// let num = 232;
// let sum = 0;

// console.log(num.indexof());

// var value = 225,
//   sum = 0;

// while (value) {
//   sum += value % 10;
//   value = Math.floor(value / 10);
// }

// console.log(sum);

// 6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

// let text = "Eclip542se";

// let myArray = text.split("");
// let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let myAlphabet = alphabet.split("");
// let result = [];

// for (let i = 0; i < myArray.length; i++) {
//   for (let n = 0; n < myAlphabet.length; n++)
//     if (myArray[i] == myAlphabet[n]) {
//       result.push(myArray[i]);
//     }
// }

// console.log(`There is ${result.length} letters in this word`);

// 7. Write a code to find on which index in array is letter "C" and show that index on screen.
//  Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

// let arr = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
// let letter = "C";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == letter.toLocaleLowerCase() || arr[i] == letter.toUpperCase()) {
//     console.log(`Its in ${arr.indexOf(arr[i])} index of array`);
//   }
// }

// var z = 4;
// var result = 0;

// for (var j = 2; j <= z * 2; j = j + 2) {
//   result += j + 2;
//   console.log(j);
// }

// console.log(result);

// var word = "Eclip542se";
// var sumLetters = word.length;

// for (var index in word) {
//   if (
//     word[index] === "0" ||
//     word[index] === "1" ||
//     word[index] === "2" ||
//     word[index] === "3" ||
//     word[index] === "4" ||
//     word[index] === "5" ||
//     word[index] === "6" ||
//     word[index] === "7" ||
//     word[index] === "8" ||
//     word[index] === "9"
//   ) {
//     sumLetters--;
//   }
// }

// console.log("There is " + sumLetters + " letters in word " + word);
// console.log("_____________");

// //1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.
// var sum = 0;

// for (var i = 1; i <= 10; i++) {
//   sum += i;
// }

// console.log("The sum of first 10 natural numbers is: " + sum);
// console.log("_____________");

// // 2. Write a code to display the cube of the number up to given an integer and show it on screen.
// // Example: 2 up to cube equals 8.

// var numA = 5;
// var cube = 1;
// var j = 0;

// while (j <= 2) {
//   cube *= numA;
//   j++;
// }

// console.log(numA + " cubed is " + cube);
// console.log("_____________");

// // 3. Write a code to calculate the factorial of a given number and show it on screen.
// //Example: The Factorial of 5 is 120.   5 * 4 * 3 * 2 * 1

// var numB = 5;
// var factorial = 1;

// for (var k = numB; k >= 1; k--) {
//   factorial *= k;
// }
// console.log("The Factorial of " + numB + " is " + factorial);
// console.log("_____________");

// // 4. Write a code to display the n terms of even natural number and their sum.
// // Example: Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
// // 7 - 2 4 6 8 10 12 14
// var numOfTerms = 6;
// var evenNums = "";
// var evenSum = 0;

// for (var l = 2; l <= numOfTerms * 2; l++) {
//   if (l % 2 === 0) {
//     evenNums += " " + l;
//     evenSum += l;
//   }
// }

// console.log(
//   "Input number of terms - " +
//     numOfTerms +
//     "\nThe even numbers are" +
//     evenNums +
//     "\nTheir sum: " +
//     evenSum
// );
// console.log("_____________");

// // 5.Write a code to calculate the sum of digits in a number and show that sum on screen.
// // Example: "Sum of digits in number 232 is 7".
// var numC = 234;
// var numCStr = numC.toString();
// var numCSum = 0;

// for (var m = 0; m < numCStr.length; m++) {
//   numCSum += +numCStr[m];
// }
// console.log("Sum of digits in number " + numC + " is " + numCSum);
// console.log("_____________");

// // 6. Write a code to count all letters in a word and show that count on screen.
// // Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".
// var word = "Eclip542se";
// var sumLetters = word.length;

// for (var index in word) {
//   if (
//     word[index] === "0" ||
//     word[index] === "1" ||
//     word[index] === "2" ||
//     word[index] === "3" ||
//     word[index] === "4" ||
//     word[index] === "5" ||
//     word[index] === "6" ||
//     word[index] === "7" ||
//     word[index] === "8" ||
//     word[index] === "9"
//   ) {
//     sumLetters--;
//   }
// }

// console.log("There is " + sumLetters + " letters in word " + word);
// console.log("_____________");

// // 7. Write a code to find on which index in array is letter "C" and show that index on screen.
// // Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].
// var givenArr = [1, 3, 32, "$", "g", "h", "t", "s", "C", 66, 23, "h2"];

// for (var el in givenArr) {
//   if (givenArr[el] === "C") {
//     console.log("Index of letter 'C' in given array is " + el);
//   }
// }

// 3. Write a code to calculate the factorial of a given number and show it on screen.
//Example: The Factorial of 5 is 120.   5 * 4 * 3 * 2 * 1

// let broj = 3;
// let result = 1;
// let stepen = 5;

// for (var i = 0; i < stepen; i++) {
//   result *= broj;
// }

//Zadatak 3
