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

// Used later based on each confirm for each requirement
var yesUppercase;
var yesLowercase;
var yesSymbols;
var yesNumbers;

// parameters for each password requirement
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
var symbols ="!@#$%^&*()?.<\>|=+:;,[-_]";
var numbers ="0123456789";

// defined via confirms by user
var confirm;
var userChoices;

function randomIndex (limit) {
        return Math.floor(Math.random() * limit);
}
//var betweenZeroAndFive = randomIndex(5);

// actual function that will run through all the options
function generatePassword() {
        var possibleCharacters = "";
       // asks for user input
    var howLong =parseInt(window.prompt("How long would you like your password to be? Please choose between 8-128 characters"));
    // first if statement for user validation 
    if (!howLong) {
        alert("Please submit your desired password length, between 8-128 characters");
        howLong = null;
    } else if (howLong < 8 || howLong > 128) {
        // validates user input
        // start user input prompts
        alert("Please choose between 8-128");
        howLong = null;
      //  generatePassword();
        return;

    } else {
        // ask user yes or no for next set of password requirements
        yesNumbers = confirm("Click OK if you would like your password to contain numbers");
        yesUppercase = confirm("Click OK if you would like your password to contain Uppercase letters");
        yesLowercase = confirm("Click OK if you would like your password to contain Lowercase letters");
        yesSymbols = confirm("Click OK if you would like your password to contain special characters");
    };

    // if the user doesn't choose any option, 
    if (!yesNumbers && !yesUppercase && !yesLowercase && !yesSymbols) {
        userChoices = alert("You must choose a criteria!");
    // restart the function
    generatePassword()
    }
    // first if statement that uses user input prompts to determine choices
    // got help from instructor with this section, prior code was overly complicated
  
    if(yesUppercase) {
        possibleCharacters = possibleCharacters.concat(uppercaseABC);
    }
    if(yesLowercase) {
        possibleCharacters = possibleCharacters.concat(lowercaseABC);
    }
    if(yesNumbers){
        possibleCharacters = possibleCharacters.concat(numbers);
    }

    if(yesSymbols){
        possibleCharacters = possibleCharacters.concat(symbols);
    }

    console.log(possibleCharacters);
    console.log(typeof possibleCharacters);
    possibleCharacters = possibleCharacters.split("");

   // this is an empty array that will be created by the user's choices for the different password requirements
    var password = "";
    console.log(howLong);
    // random selection for all variables: 
    for (var i = 0; i < howLong; i++) {
        var pickChoices = possibleCharacters[randomIndex(possibleCharacters.length)];
        password = password.concat(pickChoices);
    }
    console.log(password);
    return password;
}