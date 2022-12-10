//    1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd”
// Output: true
//     1A. Modify previous task to check if it contains char or number "5".

// Input: “1bser9re”
// Output: false

// function sum(str) {
//   let result = [];
//   let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let newResult = [];
//   let outcome = "";
//   let specialChar = "";

//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i]);
//   }

//   for (let j = 0; j < result.length; j++) {
//     if (result[j] === 5 || result[j] === "5") {
//       specialChar = "Yes it contains char 5 and its  a " + typeof result[j];
//       break;
//     } else {
//       specialChar = "Theres no char 5";
//     }
//     for (let n = 0; n < num.length; n++) {
//       if (result[j] == num[n]) {
//         newResult.push(result[j]);
//       }
//     }
//   }

//   if (newResult.length == 5) {
//     outcome = "true";
//   } else {
//     outcome = "false";
//   }

//   return `Does string contains 5 digits: ${outcome} \n${specialChar} `;
// }

// console.log(sum("1b8925abd"));

// Anonymous function

// (function (str) {
//   let result = [];
//   let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let newResult = [];
//   let outcome = "";
//   let specialChar = "";

//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i]);
//   }

//   for (let j = 0; j < result.length; j++) {
//     if (result[j] === 5 || result[j] === "5") {
//       specialChar = "Yes it contains char 5 and its  a " + typeof result[j];
//       break;
//     } else {
//       specialChar = "Theres no char 5";
//     }
//     for (let n = 0; n < num.length; n++) {
//       if (result[j] == num[n]) {
//         newResult.push(result[j]);
//       }
//     }
//   }

//   if (newResult.length == 5) {
//     outcome = "true";
//   } else {
//     outcome = "false";
//   }
//   console.log(`Does string contains 5 digits: ${outcome} \n${specialChar}`);
// })("1b8925abd");

//   2. Write a function that in a given string replaces all the appearances of the string ‘JS’
//  with ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

// function sum(str) {
//   return console.log(str.replaceAll("JS", "**"));
// }

// sum("Programming in JS is super interesting!");

// Anonymous function

// (function (str) {
//   return console.log(str.replaceAll("JS", "**"));
// })("Programming in JS is super interesting!");

//  3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

// Resenje 1

// function sum(str, position, char) {
//   let newPosition = position - 1;
//   let output = [str.slice(0, newPosition), char, str.slice(newPosition)].join(
//     ""
//   );

//   return output;
// }

// console.log(sum("Goo morning", 4, "d"));

// Resenje 2

// function sum(str, position, char) {
//   let result = "";
//   let position1 = position - 2;

//   for (let i = 0; i < str.length; i++) {
//     result += str[i];

//     if (i == position1) {
//       result += char;
//       continue;
//     }
//   }
//   return result;
// }

// console.log(sum("Goo morning", 4, "d"));

// Anonymous function

// (function (str, position, char) {
//   let result = "";
//   let position1 = position - 2;

//   for (let i = 0; i < str.length; i++) {
//     result += str[i];

//     if (i == position1) {
//       result += char;
//       continue;
//     }
//   }
//   console.log(result);
// })("Goo morning", 4, "d");

// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”

// function sum(str, position) {
//   let result = "";
//   let newPosition = position - 1;
//   let output = [str.slice(0, newPosition), str.slice(position)].join("");

//   return output;
// }

// console.log(sum("Goodd morning!", 3));
