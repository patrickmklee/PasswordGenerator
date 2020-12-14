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
    while (isValidCharType === false) {
        inp = prompt("Include lowercase, uppercase, numeric, and/or special characters (separate multiple options by spaces)?");
        sinput = inp.split(" ");
        // alert(sinput[1])
        console.log(sinput.length);
        for (i=0;i<sinput.length;i++) {
            console.log(sinput[i]);
        }
        charTypes = sinput;
        // charType = 'lowercase';
        isValidCharType = true;

    }
    return [len,charTypes];
}
function generatePassword() {
    var criteriaArray = promptCriteria();
    var len = criteriaArray[0];
    var charType = criteriaArray[1];
    
    // var len = randBetween(8,128);
    var pw = '';
    var nextChar;
    //alert("Length:" + len);
    alert("CharType: " + charType);
    for (i=0;i<len;i++) {
         nextChar = randBetween(0,9); // placeholder
         pw = pw +" "+ nextChar;
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
