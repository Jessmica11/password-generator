// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate window pop-up prompts for different password requirements
// Requirement 1: At least 8-12 characters, no more than 128


// Requirement 2: special characters: numbers


// Requirement 3: special characters: uppercase letters 


// Requirement 4: special characters: lowercase letters


// Requirement 5: special characters: symbols/special characters


// If all above "true", then generate output


// Randomize output of each option into one long 12-char string


// Console.log output of generated password