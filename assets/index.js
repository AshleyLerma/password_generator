/*

Launch button
    on click launch function to start the generator 

Function contains the below -

prompt 
    enter number of characters 8-128
        parse int 
        say not valid if NaN or if <8 or >128

confirm
    numbers yes/no    
    lower case letters yes/no
    upper case letters yes/no
    special characters yes/no

generate random selection of based on confirmed character types

display in text area 

*/

//User Variables
var passLength;
var confirmNum = confirm("Does your password need numbers?");
var confirmLowAlpha = confirm("Does your password need lowercase letters?");
var confirmUpAlpha = confirm("Does your password need uppercase letters?");
var confirmChar = confirm("Does your password need special characters?");

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

// Prompt
passLength = prompt(
  "How long would you like your password to be? Enter a length from 8-128 characters."
);
if (parseInt(passLength) < 8 || parseInt(passLength) > 128) {
  alert("You did not enter a valid password length.");
}
