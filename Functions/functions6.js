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
