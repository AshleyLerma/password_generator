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

// global variable concact selected computer options to be used in randomizer
var criteria = [];
var yourPassword = [];

// Begin collecting criteria

function generatePassword() {
  // Prompt for password length that changes answer to integer and validates lenth
  passLength = parseInt(
    prompt(
      "How long would you like your password to be? Enter a number between 8-128 characters."
    )
  );
  //   if the passLength is not the right length alert, if it is continue to confirmations
  if (passLength < 8 || passLength > 128) {
    alert("You did not enter a valid password length.");
  } else if (passLength > 8 && passLength < 128) {
    // Confirmations for each character type
    var confirmNum = confirm("Does your password need numbers?");
    var confirmLowAlpha = confirm("Does your password need lowercase letters?");
    var confirmUpAlpha = confirm("Does your password need uppercase letters?");
    var confirmChar = confirm("Does your password need special characters?");
  }
  //   if all confirms are false alert, if at least one is true continue to randomizer
  if (
    confirmNum === false &&
    confirmLowAlpha === false &&
    confirmUpAlpha === false &&
    confirmChar === false
  ) {
    alert("Please select at least one character type.");
  } else if (confirmNum === true) {
    criteria.push(...numbers);
  }
  if (confirmLowAlpha === true) {
    criteria.push(...alpha);
  }
  if (confirmUpAlpha === true) {
    criteria.push(...alpha2);
  }
  if (confirmChar === true) {
    criteria.push(...characters);
  }
  // For loop to randomize characters based on selected criteria
  for (var i = 0; i < passLength; i++) {
    // Randomly chooses a choice from the numbers array and adds them to the blank password array
    var randomChoices = criteria[Math.floor(Math.random() * criteria.length)];
    yourPassword.push(randomChoices);
  }
  // This removes the commas between the characters
  yourPassword = yourPassword.join("");
  showPassword(yourPassword);
  // This return allows the password to be used outside of the function
  return yourPassword;
}
// This function shows your password in the text area
function showPassword(yourPassword) {
  document.getElementById("password").textContent = yourPassword;
}
