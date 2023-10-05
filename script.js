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

//define generatePassword() 

// Add event listener to generate button (js waits for user clicks, then generates)
generateBtn.addEventListener("click", writePassword);

//TODO MY CODE BELOW//

// Generate window pop-up prompts for different password requirements
// Requirement 1: Ask user for # of characters for password
var howLong = prompt("How long of a password would you like? (please choose between 8 and 128 characters)"); 
alert("Your password will be " + howLong + " characters long");


// Requirements: numbers? uppercase letters? lowercase letters? symbols/special characters?
// Should be able to loop these prompts

// Define your variables
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowercaseABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseABC = [lowercaseABC.toUppercase()];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];



var  passwordChoices = [];
        while (true)
        {        
        var add = window.confirm("Would you like " + );
        if (add === true)
        {
        employee = prompt("Please enter and employee name");
        nameArr.push(employee);
        ++index;
        }
        else
            break;
        }
        window.alert(nameArr[0]);
        console.log(nameArr);

var userChoices = [];
var size = howLong; //Let user define the length of the password

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = confirm('Would you like ' + (i+1) + " in your password?");
}

//Print the array in the console.
console.log(inputArray);

// For generating a randomized password (loop through each requirement)
for (var i = 0; i < howLong; i++) {
        var pickChoices = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
        password.push(pickChoices);
}