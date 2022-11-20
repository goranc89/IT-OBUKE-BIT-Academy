"use strict";
// 1. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

// function sum(arr, a) {
//   let result = [];
//   let result1 = [];

//   for (let i = a; i < arr.length; i++) {
//     result.push(arr[i]);
//   }
//   result1 = arr.slice(0, a);

//   for (let j = 0; j < result1.length; j++) {
//     result.push(result1[j]);
//   }

//   return result;
// }

// console.log(sum([1, 2, 3, 4, 5, 6], 2));

// 2. Write a function that takes a number and returns array of its digits.

// function sum(num) {
//   let result = [];
//   let str = "";

//   str = num.toString();

//   for (let i = 0; i < str.length; i++) {
//     result[i] = parseInt(str[i]);
//   }

//   return result;
// }

// console.log(sum(68910));

// 3. Write a program that prints a multiplication table for numbers up to 12.

// function sum(num) {

//   for (let i = 1; i <= num; i++) {
//     const result = i * num;

//     console.log(`${num} * ${i} = ${result}`);
//   }
// }

// sum(12);

// 4. Write a function to find the maximum element in array of numbers. Filter out all non-number
// elements.

// function sum(num) {
//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     if (typeof num[i] === "number") {
//       result.push(num[i]);
//     }
//   }
//   console.log(Math.max(...result));
// }

// sum([1, 2, 3, 4, 11, 6, 7, "adsfg"]);

// 5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

// function sum(arr) {
//   let result = [];

//   result.push(Math.min(...arr));
//   result.push(Math.max(...arr));

//   return result;
// }

// console.log(sum([2, 3, 4, 1, 6, 9, 3, 4]));

// 6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
// poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
// broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).

// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

// console.log(getMiddle([8, 1, 2, 3, 4, 9]));
// console.log(getMiddle([1, 2, 3, 4, 5]));
// console.log(getMiddle([1, 2, 3, 4, 5, 6]));
// console.log(getMiddle([1, 2, 3, 4, 5, 6, 7]));

// function getMiddle(arr) {
//   if (arr.length % 2 === 0) {
//     return `First num is ${
//       arr[Math.floor(arr.length - arr.length)]
//     } middle num is ${arr[Math.floor((arr.length - 1) / 2)]} and last num is ${
//       arr[Math.floor(arr.length - 1, 1)]
//     }`;
//   } else {
//     return `First num is ${arr.indexOf(2)} and last num is ${
//       arr[Math.floor(arr.length - 1, 1)]
//     }`;
//   }

// }

// 8. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

// function sum(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i] / arr.length;
//   }

//   return result;
// }

// console.log(sum([2, 3, 4, 5, 10]));

// 9. Write a function to find all the numbers greater than the average.

// function sum(arr) {
//   let result = 0;
//   let newresult = [];

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i] / arr.length;
//   }

//   for (let j = 0; j < arr.length; j++) {
//     if (result < arr[j]) {
//       newresult.push(arr[j]);
//     }
//   }

//   return newresult;
// }

// console.log(sum([2, 3, 4, 5]));

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40

// function sum(weight, height) {
//   let bmi = weight / (height * 2);
//   if (bmi < 15) {
//     console.log("Starvation: less then 15");
//   } else if (bmi < 17.5 && bmi >= 15) {
//     console.log("Anorexic: less then 17.5");
//   } else if (bmi < 18.5 && bmi >= 17.5) {
//     console.log("Underweight: less than 18.5");
//   } else if (bmi < 25 && bmi >= 18.5) {
//     console.log("Ideal: greater than or equal to 18.5 but less than 25");
//   } else if (bmi < 30 && bmi >= 25) {
//     console.log("Overweight: greater than or equal to 25 but less than 30");
//   } else if (bmi < 40 && bmi >= 30) {
//     console.log("Obese: greater than or equal to 30 but less than 40");
//   } else {
//     console.log("Morbidly obese: greater than or equal to 40");
//   }
//   return bmi;
// }

// console.log(sum(92, 1.85));

// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:
// For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
// printed as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********

// function sum(arr) {

// }

// console.log(sum(["Hello", "World", "in", "a", "frame"]));
