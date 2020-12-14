// Assignment code here

function randBetween(lower,upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}
function promptCriteria() {
    var len = 0;
    var isValidLen = false;
    var charTypes;
    // Prompt user for password length in range(8,128)
    while (isValidLen === false) {
        len = prompt("Desired Password Length? ");
        if (len >= 8 && len <= 128) {
            isValidLen = true;
        } else {
            isValidLen = false;
            alert(`Value ${len} is outside allowed range of 8 to 128 characters`);
        }
    }

    var isValidCharType = false;
    var charTypeChoices = ['lowercase', 'uppercase', 'numeric', 'special'];
    // Character type preference stored in array
    // # 0 - Lowercase Characters
    // # 1 - Uppercase Characters
    // # 2 - Numeric Characters
    // # 3 - Special Characters


    while (isValidCharType === false) {
        inc_lower = confirm("Include lowercase letters?")
        inc_upper = confirm("Include uppercase letters?")
        inc_numeric = confirm("Include numeric characters?")
        inc_special = confirm("Include special characters?")
        checkValid = (inc_lower || inc_upper || inc_numeric || inc_special)
        if (checkValid === true) {
            isValidCharType = true;
        } else {
            alert("Please select at least 1 character type.")
        }
        // inp = prompt("Include lowercase, uppercase, numeric, and/or special characters (separate multiple options by spaces)?");
        // sinput = inp.split(" ");
        // alert(sinput[1])
        sinput = [inc_lower, inc_upper, inc_numeric, inc_special];
        console.log(sinput.length);
        for (i=0;i<sinput.length;i++) {
            console.log(sinput[i]);
        }
        charTypes = sinput;
        // charType = 'lowercase';

    }
    return [len,charTypes];
}
// ---------------- Ignore  Not implemented

// ASCII char conversion

// 32 - 47 : SP Chars
// 48 - 57 : Numeric
// 58 - 64 : SP Chars 2
// 65 - 90 : UpperCase
// 91 - 96 : SP Chars 3
// 97 - 122 : lowercase
// 123 - 126 : SP Chars 4
// ------------------
// 
// Simpler to create reference CHARS_** variables, then concatenate based on user selection

function generatePassword() {
// Constants
    var CHARS_UC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var CHARS_LC = 'abcdefghijklmnopqrstuvwxyz';
    var CHARS_NUM = '0123456789';
    var CHARS_SP = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// placeholder variables for the generated password
    var pw = '';
    var nextChar;
// Recieve criteria from user
    var criteriaArray = promptCriteria();
    var len = criteriaArray[0];
    var charTypes = criteriaArray[1];

    var pw_choices = ''

    if (charTypes[0] == true) {
        pw_choices = pw_choices + CHARS_LC;
    }
    if (charTypes[1] == true) {
        pw_choices = pw_choices + CHARS_UC;
    }
    if (charTypes[2] == true) {
        pw_choices = pw_choices + CHARS_NUM;
    }
    if (charTypes[3] == true) {
        pw_choices = pw_choices + CHARS_SP;
    }
    var pw_choicesLen = pw_choices.length;
    // var pw_choicesArray = pw_choices.split();
    console.log(pw_choices); 
    //alert("Length:" + len);
    //alert("CharType: " + charType);   
    for (i=0;i<len;i++) {
         nextChar = pw_choices[randBetween(0,pw_choicesLen)];
         pw = pw+""+nextChar;
    } 
    return pw;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
