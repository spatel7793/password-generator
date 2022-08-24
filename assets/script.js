var generateBtn = document.querySelector("#generate");
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "1234567890";
var specialChar = "!?<>@#$&_*";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

function determineLength() {
    passwordLength = prompt("How many characters are in your password (between 8-128 characters):");
  
    if (passwordLength < 8) {
      alert("Password length must be between 8-128 characters")
      determineLength();
    } else if (passwordLength > 128) {
      alert("Password length must be between 8-128 characters")
      determineLength();
    } else {
      prompt("Would you like to add other characters in the password(Yes/No)?")
    }
    return passwordLength;
  }
  
  function determineUppercase() {
    uppercaseCheck = prompt("Would you like to include uppercase letters? (Yes/No)?");
    uppercaseCheck = uppercaseCheck.toLowerCase();
  
    if (uppercaseCheck === null || uppercaseCheck === "") {
      alert("yes/no?");
      determineUppercase();
  
    } else if (uppercaseCheck === "yes") {
      uppercaseCheck = true;
      return uppercaseCheck;
  
    } else if (uppercaseCheck === "no") {
      uppercaseCheck = false;
      return uppercaseCheck;
  
    } else {
      alert("yes/no?")
      determineUppercase();
    }
    return uppercaseCheck;
  }
  
  function determineNumbers() {
    numberCheck = prompt("Would you like to include numbers(Yes/No)?");
    numberCheck = numberCheck.toLowerCase();
  
    if (numberCheck === null || numberCheck === "") {
      alert("yes/no?");
      determineNumbers();
  
    } else if (numberCheck === "yes") {
      numberCheck = true;
      return numberCheck;
  
    } else if (numberCheck === "no") {
      numberCheck = false;
      return numberCheck;
  
    } else {
      alert("yes/no?")
      determineNumbers();
    }
    return numberCheck;
  }
  
    function determinespecial() {
      specialCheck = prompt("Would you like to include special characters(Yes/No)?");
      specialCheck = specialCheck.toLowerCase();
  
      if (specialCheck === null || specialCheck === "") {
        alert("yes/no?")
        determinespecial();
  
      } else if (specialCheck === "yes") {
        specialCheck = true;
  
      } else if (specialCheck === "no") {
        specialCheck = false;
        return specialCheck;
  
      } else {
        alert("yes/no?")
        determinespecial();
      }
      return specialCheck;
    }
  
    function generatePassword() {
      determineLength();
      console.log(passwordLength)
      determineUppercase();
      console.log(uppercaseCheck)
      determineNumbers();
      console.log(numberCheck);
      determinespecial();
      console.log(specialCheck);
  
      var Characters = lowercaseChar;
      var password = "";
      if (uppercaseCheck) {
        Characters += uppercaseChar;
  
      } else if (numberCheck) {
        Characters += numberChar;
  
      } else if (specialCheck) {
        Characters += specialChar;
  
      } else {
        Characters === lowercaseChar;
      }
  
      for (var i = 0; i < passwordLength; i++) {
        password += Characters.charAt(Math.floor(Math.random() * Characters.length));
      }
      return password;
    }
    // Write password to the #password input
    function writePassword() {
      var password =  "";
      password = generatePassword();
      var passwordText = document.querySelector("#password");
  
      passwordText.value = password;
    }
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
  
  