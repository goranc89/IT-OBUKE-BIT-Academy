// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// for (let i = 0; i <= 15; i++) {
//   if (i % 2) {
//     console.log("number is even " + i);
//   } else {
//     console.log("number is odd " + i);
//   }
// }

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// for (let i = 0; i < 1000; i++) {
//   if (i % 15 == 0) {
//     console.log(i);
//   }
// }

// 3. Write a program that will iterate from 0 to 10 and display squares of numbers.

// let sum = [];
// for (let i = 0; i <= 10; i++) {
//   sum = i ** 2;
//   console.log(sum);
// }

// 4. Write a program to compute the sum and product of an array of integers.

// let aArray = [1, 5, 6, 4];
// let result = 0;
// let result2 = 1;

// for (let i = 0; i < aArray.length; i++) {
//   result += aArray[i];
//   result2 *= aArray[i];
// }
// console.log("Sum is " + result + " and product is " + result2);

// 5. Write a program which prints the elements of the following array as a single string.
// var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];

// let x = ["1", "A", "B", "c", "r", true, NaN, undefined];
// let result = 0;
// for (let i = 0; i < x.length; i++) {
//   result += x[i];
// }

// console.log("Ovo je string od array " + result);

// 6. Write a program that prints the elements of the following array. **

// var a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
// ];
// let result = [];

// for (let i = 0; i < a.length; i++) {
//   result += a[i];
// }

// console.log(result);

// 7. Write a program that outputs the sum of squares of the first 20 numbers.

// let sum = [];
// let result = 0;
// for (let i = 0; i <= 20; i++) {
//   sum = i * i;
//   result += sum;
// }
// console.log("Sum of all square numbers is " + result);

// 8. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// let david = 80;
// let marko = 77;
// let dany = 88;
// let john = 95;
// let thomas = 68;

// let avgGrade = (david / 100) * 100;

// let result = "";

// if (avgGrade <= 100 && avgGrade > 90) {
//   result = "A";
// } else if (avgGrade <= 90 && avgGrade > 80) {
//   result = "B";
// } else if (avgGrade <= 80 && avgGrade > 70) {
//   result = "C";
// } else if (avgGrade <= 70 && avgGrade > 60) {
//   result = "D";
// } else if (avgGrade <= 60 && avgGrade > 50) {
//   result = "E";
// } else if (avgGrade <= 50 && avgGrade > 40) {
//   result = "F";
// }
// console.log(result);

// var marks = [80, 87, 88, 95, 68];
// var sum = 0;
// for (i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }
// average = sum / marks.length;
// console.log(sum);
// console.log(average);

// if (average < 100) {
//   result = "The mark is A";
// } else if (average < 90) {
//   result = "The mark is B";
// } else if (average < 80) {
//   result = "The mark is C";
// } else if (average < 70) {
//   result = "The mark is D";
// } else if (average < 60) {
//   result = "The mark is F";
// }
// console.log(result);

// Dimitrije resenje
// var David = 80 / 100;
// var Mark = 77 / 100;
// var Dany = 88 / 100;
// var John = 95 / 100;
// var Thomas = 68 / 100;
// var niz1 = [David, Mark, Dany, John, Thomas];
// for (p = 0; p < niz1.length; p++) {
//   if (niz1[p] <= 0.6) {
//     console.log("8. ZADATAK:" + niz1[p] + "marks is: F");
//   } else if (0.6 < niz1[p] <= 0.7) {
//     console.log(niz1[p] + "marks is: D");
//   } else if (0.7 < niz1[p] <= 0.8) {
//     console.log(niz1[p] + "marks is: C");
//   } else if (0.8 < niz1[p] <= 0.9) {
//     console.log(niz1[p] + "marks is: B");
//   } else if (0.9 < niz1[p]) {
//     console.log(niz1[p] + "marks is: A");
//   } else {
//     console.log("Error!");
//   }
// }

//9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).
// Note: This is actually an interview question that has been claimed to weed out a significant
// percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
// good about yourself.

// let result = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     if (i % 15 == 0) {
//       result = "Fizz " + "FizzBuzz " + "Buzz";
//     } else {
//       result = "Fizz";
//     }
//   } else if (i % 5 == 0) {
//     result = "Buzz";
//   } else {
//     result = i;
//   }
//   console.log(result);
// }

// Exercise 2 loops

// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

// let e = 3;
// let a = [5, -4.2, 3, 7];

// let result = "";

// for (let i = 0; i < a.length; i++) {
//   if (e == a[i]) {
//     result = "Output: YES";
//     break;
//   } else {
//     result = "Output: NO";
//   }
// }

// console.log(result);

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// let firstArray = [-3, 11, 5, 3.4, -8];
// let secondArray = [-3, 11, 5, 3.4, -8];

// let result = [];

// for (let i = 0; i < firstArray.length; i++) {
//   if (firstArray[i] > 0) {
//     result = firstArray[i] * 2;
//   } else {
//     result = firstArray[i];
//   }
//   console.log(result);
// }

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// let mainArray = [4, 2, 2, -1, 6];
// let num = mainArray[0];
// let result = [];

// for (let i = 0; i < mainArray.length; i++) {
//   if (num < mainArray[i]) {
//     result = "Min ";
//   } else {
//     result = "Nije min";
//   }
// }
// console.log(result);

// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// let mainArray = [3, 11, -5, -3, 2];
// let result = 0;

// for (let i = 0; i < mainArray.length; i++) {
//   if (mainArray[i] > 0) {
//     result += mainArray[i];
//   }
// }
// console.log(result);

//6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// let mainArray = [2, 4, -2, 7, -2, 4, 2];
// let result = "";
// let resultI = [];
// let resultK = [];

// for (let i = 0; i < mainArray.length; i++) {
//   resultI = mainArray[i];
// }

// for (let k = mainArray.length; k > 0; k--) {
//   resultK = mainArray[k];
// }

// if (resultI == resultK) {
//   result = "Simemtricno je";
// } else {
//   result = "Nije Simemtricno";
// }
// console.log(resultI);

// Zadatak 9 Dimitrije

// var result6 = 0;
// for (var h = 1; h <= 100; h++) {
//   if (h % 3 == 0) {
//     if (h % 15 == 0) {
//       result6 = "FizzBuzz " + "Fizz " + " Buzz";
//     } else {
//       result6 = "Fizz";
//     }
//   } else if (h % 5 == 0) {
//     result6 = "Buzz";
//   } else {
//     result6 = h;
//   }
//   console.log(
//     "9. ZADATAK:Numbers from 1 to 100, with two exceptions " + result6
//   );
// }
