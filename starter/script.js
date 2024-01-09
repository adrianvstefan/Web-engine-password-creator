// // Array of special characters to be included in password
var chooseCharacters = [] 
var passwordLength = Number
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



/// Function to prompt user for password options
function getPasswordOptions() {
  chooseCharacters = [alert("A password will be provided for you. Please choose your length and the characters you want included.")]
  passwordLength = prompt("Please choose your password length between 8 and 128 characters")

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Your password is not a number or the length is not in the range of 8 to 128 characters. Please try again!")
  return false
  }

  if(confirm("Do you like your password to have special characters?")) {
    chooseCharacters = chooseCharacters.concat(specialCharacters);
  }
  if(confirm("Do you like your password to have numbers?")) {
    chooseCharacters = chooseCharacters.concat(numericCharacters);
  }
  if(confirm("Do you like your password to have lowercase letters?")) {
    chooseCharacters = chooseCharacters.concat(lowerCasedCharacters);
  }
  if(confirm("Do you like your password to have uppercase letters?")) {
    chooseCharacters = chooseCharacters.concat(upperCasedCharacters);
  }
  return true
}

// Function to generate password with user input and get random element from an array
function generatePassword() {
    var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chooseCharacters.length);
    password = password + chooseCharacters[randomIndex];
  }
    return password
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var confirmCharacters = getPasswordOptions();
  if (confirmCharacters) {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  }
}

//Add event listener to generate button
generateBtn.addEventListener('click', writePassword);