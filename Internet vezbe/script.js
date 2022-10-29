// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;

// function sum(num) {
//   let result = "";

//   for (let i = num.length - 1; i >= 0; i--) {
//     result += num[i];
//   }

//   return result;
// }

// console.log(sum("32243"));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

// function sum(str) {
//   let total = "";

//   let reverseTotal = "";

//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     total += str[i];

//     reverseTotal = str;

//     if (total == reverseTotal) {
//       result = "This String is Palidrome";
//     } else {
//       result = "NO";
//     }
//   }

//   return result;
// }

// console.log(sum("12321"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function sum(str) {
  let total = [];
  // let result = "";

  for (let i = 0; i < str.length; i++) {
    total += str[i];
  }

  return total;
}

console.log(sum("dog"));
