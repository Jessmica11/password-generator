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
//FOR TESTING IDEAS