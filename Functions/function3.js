// 1. Write a program to insert a string within a string at a particular position (default is 1,
// beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

// function sum(longtxt, text, num) {
//   let result = [];

//   if (typeof num == "undefined") {
//     num = 0;
//   }

//   return longtxt.slice(0, num) + text + " " + longtxt.slice(num);
// }

// console.log(sum("My random string", "JS", 10));

// function insertStr(a, b, num = 0) {
//   var result = "";
//   var result2 = "";

//   for (var i = 0; i < num; i++) {
//     result += a[i];
//   }
//   for (var j = num; j < a.length; j++) {
//     result2 += a[j];
//   }
//   result = result + b + result2;

//   console.log(result);
// }
// insertStr("My random string", "JS ", 10);

// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

// function sum(arr) {
//   let result = [];
//   let resultNew = [];

//   // result = arr.toString();

//   for(let i = 0)

//   return result;
// }

// console.log(sum([NaN, 0, 15, false, -22, " ", undefined, 47, null]));

// 3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, " ", undefined, 47, null] -&gt; [15, -22, 47]

// function sum(arr) {
//   let result = [];

//   result = arr.filter(Number);

//   return result;
// }

// console.log(sum([NaN, 0, 15, false, -22, " ", undefined, 47, null]));

// 4. Write a function that reverses a number. The result must be a number.

// function sum(num) {
//   let result = 0;

//   result = num.reverse();

//   return result;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// 5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
// last &#39;n&#39; elements of the array.

// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.

// function sum(count, num2) {
//   let result = [];

//   for (let i = 0; i < count.length; i++) {
//     result.push(i);
//   }

//   return result;
// }

// console.log(sum(6, 5));
