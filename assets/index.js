/*
reprompt if passLength criteria is not met

if no criteria is selected alert

generate random selection of based on confirmed character types
    - create Math random with Math floor based on passLenth 
    - concact final selection into a string

display in text area 

*/

//User Variables
var passLength;
var confirmNum;
var confirmLowAlpha;
var confirmUpAlpha;
var confirmChar;

// Computer option arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var characters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  "/",
  ":",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~",
];

// convert alpha to upper case to create alpha2
toUpper = function (x) {
  return x.toUpperCase();
};

var alpha2 = alpha.map(toUpper);

// Computer output
var password = [];

// Begin collecting criteria

function generatePassword() {
  // Prompt for password length that changes answer to integer and validates lenth
  passLength = parseInt(
    prompt(
      "How long would you like your password to be? Enter a number between 8-128 characters."
    )
  );
  if (passLength < 8 || passLength > 128) {
    alert("You did not enter a valid password length.");
  }
  // Confirmations for each character type
  var confirmNum = confirm("Does your password need numbers?");
  var confirmLowAlpha = confirm("Does your password need lowercase letters?");
  var confirmUpAlpha = confirm("Does your password need uppercase letters?");
  var confirmChar = confirm("Does your password need special characters?");
}
