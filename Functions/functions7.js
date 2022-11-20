// 5. Create a function that validates a password to conform to the following rules:
//  Length between 6 and 24 characters,
//  At least one uppercase letter (A-Z).
//  At least one lowercase letter (a-z).
//  At least one digit (0-9).
//  Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//  Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
//  Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
//  validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
//  validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!

// function checkLength(password) {
//   let resultMessage = "Length must between 6 and 25 characters";
//   if (password.length < 6 || password.length > 24) {
//     console.log(resultMessage);
//     return false;
//   } else {
//     return true;
//   }
// }

// function checkUpperCase(password) {
//   let resultMessage = "Password must contain at least one upper case letter!";
//   let containsUppercase = !!/[A-Z]+/.test(password);

//   if (containsUppercase) {
//     return true;
//   } else {
//     console.log(resultMessage);
//     return false;
//   }
// }

// function checkLowerCase(password) {
//   let resultMessage = "Password must contain at least one Lower case letter!";
//   let containsLowercase = !!/[a-z]+/.exec(password);

//   if (containsLowercase == false) {
//     console.log(resultMessage);
//   }
//   return containsLowercase;
// }

// function checkNumber(password) {
//   let resultMessage = "Password must contain at least one number!";
//   let containsNumber = !!/[0-9]+/.test(password);

//   if (!containsNumber) {
//     console.log(resultMessage);
//   }
//   return containsNumber;
// }

// function checkRepetition(password) {
//   let resultMessage =
//     "Password must not contain repetition of 3 character in a row!";
//   let checkRepetition = !!/(.)\1{2,}/.exec(password);

//   if (checkRepetition) {
//     console.log(resultMessage);
//   }
//   return checkRepetition;
// }

// function checkSpecialCharacters(password) {
//   let resultMessage = "Password contains unsupported characthers!";
//   let specialCharacters = "! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] :  ?  , .";
//   let notSupporedSpecial = false;

//   for (character in password) {
//     if (
//       !specialCharacters.includes(password[character]) &&
//       !password[character].match(/[a-z]/i) &&
//       isNaN(parseInt(password[character]))
//     )
//       notSupporedSpecial == true;
//   }

//   if (notSupporedSpecial) {
//     console.log(resultMessage);
//   }

//   return notSupporedSpecial;
// }

// function validatePassword(password) {
//   let checkLengthOfPassword = checkLength(password);
//   let checkUpperCasePwassword = checkUpperCase(password);
//   let checkLowerCasePassword = checkLowerCase(password);
//   let checkNumberPassword = checkNumber(password);
//   let checkRepetitionPassword = checkRepetition(password);
//   let checkSpecialCharactersPassword = checkSpecialCharacters(password);
//   let fuctionIsValid = false;

//   if (
//     checkLengthOfPassword == true &&
//     checkUpperCasePwassword == true &&
//     checkLowerCasePassword == true &&
//     checkNumberPassword == true &&
//     !checkRepetitionPassword &&
//     !checkSpecialCharactersPassword
//   ) {
//     fuctionIsValid = true;
//   }
//   return fuctionIsValid;
// }

// console.log(validatePassword("PASSsWORd1$"));

// 1. Write a function named tellFortune that:
//  takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
//  outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
// Call that function 3 times with 3 different values for the arguments.

// 2. Write a function named calculateDogAge that:
//  takes 1 argument: your puppy&#39;s age.
//  calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
//  outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

// function calculateDogAge(age) {
//   return `Your doggie is ${age * 7} years old in dog years!`;
// }

// console.log(calculateDogAge(2));

// 3. Write a function named calculateSupply that:
//  takes 2 arguments: age, amount per day.
//  calculates the amount consumed for rest of the life (based on a constant max age).
//  outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
// X&quot;
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function calculateSupply() {}
