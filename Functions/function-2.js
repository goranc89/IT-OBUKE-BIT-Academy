// 1. Write a function to check whether the `input` is a string or not.

// function txt(str) {
//   let result = "";

//   if (typeof str === "string") {
//     result = "true";
//   } else {
//     result = "false";
//   }

//   return result;
// }

// console.log(txt(10));

// 2. Write a function to check whether a string is blank or not.

// function txt(str) {
//   let result = "";

//   if (typeof str === "string" && str === "") {
//     result = "true";
//   } else {
//     result = "false";
//   }

//   return result;
// }

// console.log(txt(""));

// 3. Write a function that concatenates a given string n times (default is 1).

// function txt(sum, num) {
//   let result = "";

//   for (let i = 0; i < num; i++) {
//     result += sum;
//   }

//   return result;
// }

// console.log(txt("Ha", 3));

// 4. Write a function to count the number of letter occurrences in a string.

// function sum(text, letter) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === letter) {
//       result += text[i];
//     }
//   }

//   return result.length;
// }

// console.log(sum("andrijan", "n"));

// Branko resenje

// function countLetters(string, letter) {
//   var counter = 0;
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === letter) counter++;
//   }
//   console.log(
//     "Number of letter " +
//       letter +
//       " in string '" +
//       string +
//       "' is " +
//       counter
//   );
// }
// countLetters("My random strinnng", "n");

//5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

// function sum(text, letter) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === letter) {
//       result = text.indexOf(letter);
//       break;
//     } else {
//       result = -1;
//     }
//   }

//   return result;
// }

// console.log(sum("andrijan", "d"));

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

// function firstLetter(string, letter) {
//   let index = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == letter) {
//       index = i;
//     } else {
//       index = -1;
//     }
//   }
//   return index;
// }
// console.log(firstLetter("strings", "s"));

// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

// function sum(text) {
//   let result = [];

//   for (let i = 0; i < text.length; i++) {
//     result.push(text[i]);
//   }

//   for (let j = 0; j < result.length; j++) {
//     if (result[j] == " ") {
//       result[j] = "NULL";
//     }
//   }
//   return result;
// }

// console.log(sum("My random plus radi"));

// function convertIntoArr(string) {
//   var arr = [];

//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === " ") {
//       arr[i] = null;
//     } else {
//       arr[i] = string[i];
//     }
//   }

//   console.log(arr);
// }
// convertIntoArr("My random string");

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

// function test_prime(n) {
//   if (n === 1) {
//     return "Number is not prime";
//   } else if (n === 2) {
//     return "Number is prime";
//   } else {
//     for (var i = 2; i < n; i++) {
//       if (n % i == 0) {
//         return "Number is not prime";
//       }
//     }
//     return "Number is prime";
//   }
// }

// console.log(test_prime(19));

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

// function sum(text, num) {
//   let result = [];
//   let resenjaStr = "";

//   for (let i = 0; i < text.length; i++) {
//     result.push(text[i]);
//   }

//   for (let j = 0; j < result.length; j++) {
//     if (result[j] == " ") {
//       result[j] = num;
//     }
//   }
//   for (let p = 0; p < result.length; p++) {
//     resenjaStr += result[p];
//   }

//   return resenjaStr;
// }

// console.log(sum("My random string", "-"));

// Drugi nacin

// function sum(str, num) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       result += num;
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(sum("My random string", "-"));
// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

// function sum(text, letter) {
//   let result = "";
//   let result1 = "";

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] == letter) {
//       result = text[i] + "...";
//     }
//   }

//   return result;
// }

// console.log(sum("andrijana", "n"));

// ***********************

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
// ['1', '21', undefined, '42', "1e+3";, Infinity] -&gt; [1, 21, 42, 1000]

// function sum(num) {
//   let result = [];
//   let resultNew = [];

//   for (let i = 0; i < num.length; i++) {
//     result[i] = parseInt(num[i]);
//   }

//   for (let j = 0; j < result.length; j++) {
//     if (result[j].toString() !== "NaN") {
//       resultNew.push(result[j]);
//     }
//   }

//   return resultNew;
// }

// console.log(sum(["1", "21", undefined, "42", "1e+3", Infinity, 1]));

// function toNumArray(arr) {
//   var result = [];
//   var counter = 0;

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === null) {
//       continue;
//     } else if (isNaN(arr[i])) {
//       continue;
//     } else if (arr[i] === undefined) {
//       continue;
//     } else if (arr[i] === Infinity) {
//       continue;
//     } else {
//       result[counter] = +arr[i];
//       counter++;
//     }
//   }
//   console.log(result);
// }

// toNumArray(["1", "21", undefined, null, "42", "1e+3", Infinity]);

//12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

// function retirement(age) {
//   let result = "";
//   let resultMen = 65 - age;
//   let resultWomen = 60 - age;

//   if (age >= 65) {
//     result = "You are alredy retired";
//   } else if (age >= 60 && age < 65) {
//     result = `If you are women you are alredy retired if you are man you will retire in ${resultMen} years`;
//   } else {
//     result = `If you are man you will retire in ${resultMen} years and if you are women you will retire in ${resultWomen} years`;
//   }

//   return result;
// }

// console.log(retirement(20));

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -&gt; 1st
// 11 -&gt; 11th

// function sum(num) {
//   let result = "";

//   if (num == 1) {
//     result = "1st";
//   } else if (num == 2) {
//     result = "2nd";
//   } else if (num == 3) {
//     result = "3rd";
//   } else result = num + "th";

//   return result;
// }

// console.log(sum(11));
