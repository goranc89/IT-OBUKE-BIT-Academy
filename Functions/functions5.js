// 1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// function sum(arr) {
//   return Math.min(...arr);
// }

// console.log(sum([3, 500, 12, 149, 53, 414, 1, 19]));

// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

// function sum(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       result.push(20);
//       continue;
//     } else {
//       result[i] = arr[i] / 2 + 5;
//     }
//   }

//   return result;
// }

// console.log(sum([3, 500, -10, 149, 53, 414, 1, 19]));

// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 > 6,
// 61-70 > 7,
// 71-80 > 8,
// 81-90 > 9,
// 91-100 > 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.

// function studentsGrades(students, grades) {
//   var result = "";

//   for (var j = 0; j < grades.length; j++) {
//     if (grades[j] > 50 && grades[j] <= 60) {
//       result += students[j] + " acquired " + grades[j] + " and earned 6. \n";
//     } else if (grades[j] > 60 && grades[j] <= 70) {
//       result += students[j] + " acquired " + grades[j] + " and earned 7. \n";
//     } else if (grades[j] > 70 && grades[j] <= 80) {
//       result += students[j] + " acquired " + grades[j] + " and earned 8. \n";
//     } else if (grades[j] > 80 && grades[j] <= 90) {
//       result += students[j] + " acquired " + grades[j] + " and earned 9. \n";
//     } else if (grades[j] > 90) {
//       result += students[j] + " acquired " + grades[j] + " and earned 10. \n";
//     } else {
//       result +=
//         students[j] +
//         " acquired " +
//         grades[j] +
//         " and failed to complete the exam. \n";
//     }
//   }

//   console.log(result);
// }
// studentsGrades(
//   ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
//   [50, 39, 63, 72, 99, 51, 83, 59]
// );

// 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

// let arr = [13, 11, 15, 5, 6, 1, 8, 12];
// let result = [];

// arr.sort(function (a, b) {
//   return a - b;
// });

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i] * 2;
// }

// console.log(result);

// 5. (skip :))Sort a previously defined array in a descending order and display it in the
// console.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

// var arr = [13, 11, 15];
// arr.sort(compare);
// function compare(a, b) {
//   return a - b;
// }
// let newAr = [...arr].reverse();

// console.log(newAr);

// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2 350 000

// function sum(num) {
//   let resultEven = 0;
//   let resultOdd = 0;

//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       resultEven += i;
//     }

//     if (i % 2 !== 0 && i <= 500) {
//       resultOdd += i;
//     }
//   }

//   return (resultEven - resultOdd) * 12.5;
// }

// console.log(sum(1000));

// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

// function sum(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= 2) {
//       result[i] = arr[i].substring(0, 2);
//     }
//   }

//   return result.toString().replaceAll(",", "");
// }

// console.log(
//   sum(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"])
// );

// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

// function sum(str) {
//   let result = "";
//   let result1 = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return result;
// }

// console.log(sum("Belgrade Institute of Technology"));

//9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

// function sum(a, b) {
//   let result = [];

//   for (let i = a; i <= b; i++) {
//     for (let j = a; j <= b; j++) {
//       if (i !== j) {
//         result += i + "," + j + "\n";
//       }
//     }
//   }

//   return result;
// }

// console.log(sum(1, 7));

// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
// by 1 and by itself).
// Input: 17 | 15
// Output: true | false

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

// console.log(test_prime(53));

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

// function sum(str) {
//   let result = "";
//   let result1 = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       result += str[i];
//     }
//   }

//   for (let j = str.length - 1; j >= 0; j--) {
//     if (str[j] !== " ") {
//       result1 += str[j];
//     }
//   }

//   if (result == result1) {
//     result = "True";
//   } else {
//     result = "False";
//   }

//   return result;
// }

// console.log(sum("a nut for a jar of tuna"));

// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9

// function sum(num1, num2) {
//   let result = 0;

//   for (let i = 0; i <= num1; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       result = i;
//     }
//   }

//   return result;
// }

// console.log(sum(42, 192));

// *****************************************************************************************************

// 5A vezbe

// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.

// function sum(num) {
//   let result = "";

//   if (Math.floor(Math.random() * num) === 1) {
//     result =
//       "Svaki uspešan projekat pre svoga završetka izgleda kao potencijalna katastrofa.";
//   } else if (Math.floor(Math.random() * num) === 2) {
//     result =
//       "Ja lično ne verujem u slučajnosti. Uspešni ljudi su oni koji sami stvaraju svoje šanse.";
//   } else if (Math.floor(Math.random() * num) === 3) {
//     result =
//       "Neuspeh nije najstrašnija stvar na svetu. Najstrašnije je ne pokušati.";
//   } else if (Math.floor(Math.random() * num) === 4) {
//     result =
//       "Nemojte pokušavati biti samo uspešna osoba nego i osoba od vrednosti.";
//   } else if (Math.floor(Math.random() * num) === 5) {
//     result = "Koncentrišite se na to gde želite stići, a ne gde ste bili.";
//   } else if (Math.floor(Math.random() * num) === 6) {
//     result =
//       "U životu nećete mnogo postići ako radite samo onim danima kada se osećate dobro.";
//   } else {
//     result = " Vise srece drugi put :)";
//   }

//   return result;
// }

// console.log(sum(6));

// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
//   nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
//   godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
//   prestupna).

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.

// function sum(str) {
//   let result = "";
//   let result1 = "";

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       result += str[i];
//       continue;
//     } else {
//       result1 += str[i];
//     }
//   }
//   return `Imamo ${result.length} samoglasnika i ${
//     result1.replaceAll(" ", "").length
//   } suglasnika`;

// }

// console.log(sum("danas je lep dan"));

//4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.

// function sum(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result += typeof arr[i] + "\n";
//   }

//   return result;
// }

// console.log(sum(["andrija", 12, true]));

// 5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [12bb”,
//   “pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].

// function sum(arr) {
//   let result = [];
//   let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].split()) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(sum(["12bb", "pp", "as23s", "00sd"]));
