//1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

// let arr = [2, 4, 7, 11, -2, 1];
// function sum(arr) {
//   return arr.flatMap((i) => [i, i]);
// }

// console.log(sum(arr));

//2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// let arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

// function sum(arr) {
//   let result = [...new Set(arr)];

//   return result;
// }

// console.log(sum(arr));

//3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

// arr = [1, 2, 9, 2, 1];

// function sum(arr) {
//   let result = arr.filter((num) => num % 2 === 1);
//   let result1 = "";

//   if (result.length > 1) {
//     result1 = "true";
//   } else {
//     result1 = "false";
//   }
//   return result1;
// }

// console.log(sum(arr));

//B

//4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// let arr = [1, 4, -2, 11, 8, 1, -2, 3];

// function sum(num) {
//   debugger;
//   return Math.min(...num);
// }

// console.log(sum(arr));

//5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// A

// var arr = [2, 3, 8, -2, 11, 4];

// function sum(a, num) {
//   let result = [];

//   for (let i = 0; i < a.length; i++) {
//     if (num > a[i]) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// }

// console.log(sum(arr, 6));

// B

// Input: ["JavaScript", "Programming", "fun", "product"]
// Output: ["Programming", "product"]

// var arr = ["JavaScript", "Programming", "fun", "product"];

// function sum(a, text) {
//   let result = [];

//   for (let i = 0; i < a.length; i++) {
//     if (!a[i].search(new RegExp(text, "i"))) {
//       result.push(a[i]);
//     }
//   }

//   return result;
// }

// console.log(sum(arr, "pro"));
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function updateSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

setInterval(nextSlide, 1000); // Change slides every 3 seconds
