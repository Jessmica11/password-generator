// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // (places output password in password box)
  var passwordText = document.querySelector("#password");
  // text is the password here
  passwordText.value = password;
}

// Add event listener to generate button (js waits for user clicks, then generates)
generateBtn.addEventListener("click", writePassword);

//TODO: MY CODE BELOW//
// Define password requirements as variables
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]";
var numbers ="0123456789";
var multiSelect =[uppercaseABC + lowercaseABC + numbers + specialSymbols];

// Confirm prompts for the user to answer aka user choices for password
var howLong = prompt("How long would you like your password to be? Please choose between 8-128 characters");
// In case user chooses number outside of scope provided
if (howLong < 8 || howLong > 128) {
  alert("Your password does not meet the criteria");
  var howLong = prompt("Password must be between 8 and 128 characters in length.");
}
var uppercase = confirm("Click OK if you would like numbers in your password");
var lowercase = confirm("Click OK if you would like lowercase letters in your password");
var specialSymbols = confirm("Click OK if you would like special symbols in your password");
var numbers = confirm("Click OK if you would like numbers in your password");

//In case user doesn't pick any option we need an error alert
if (uppercase === false && lowercase === false && specialSymbols === false && numbers === false) {
  alert("You must choose at least 1 requirement to generate a password. Please refresh to start over");
}

// Need to define the generatePassword() function for each requirement's options
function generatePassword() {
    password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
    generatePassword.length = howLong;
}