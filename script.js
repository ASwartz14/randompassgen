///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

//1) Gather user info--pass length and params.
//2) Store vals 
//3.) validate at least one char critera is valid and pw length is 8-128
//    a)if not force fix
//4.)  empty variable for storage of individual critera 
//   
//5)If valid randomize criteria output
// 
//    a) random char from each criteria
//    b) randomize order
//6) concat data one after another into empty final pass variable
// 7) output to page


/* Gets the users password length choice if its not a number,is too big or too small
 or doesn't fit the critera for length will force user to input proper data by not moving on till they do.*/

 var strength = prompt("Pick your password length choose a number between 8 - 128.");
 console.log(strength);
   while (isNaN(strength) || strength < 8 || strength > 128) {
     alert("Not a valid entry! Please enter a number between 8 and 128.");
     var strength = prompt("Pick your password length choose number between 8 - 128.");
   } 
 var lower= confirm("Do you want lowercase letters?");
 var upper= confirm("Do you want uppercase letters?");
 var number =confirm("Do you want numbers?");
 var symbols =confirm("Do you want symbols?");
 
 
 if (!lower&& !upper && !number && !symbols) {
   alert("Please select at least one password critera.")
   var strength = prompt("Pick your password length choose number between 8 - 128.");
   var lower= confirm("Do you want lowercase letters?");
   var upper= confirm("Do you want uppercase letters?");
   var number =confirm("Do you want numbers?");
   var symbols =confirm("Do you want symbols?");
 
 }
 
 // get random lowercase function//
 function getLower() {
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
 }
 console.log(getLower());
 
 
 //get random uppercase letter//
 function getUpper(){
   return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
 console.log(getUpper());
 
 //get random number//
 function getNums(){
   return String.fromCharCode(Math.floor(Math.random()*10)+48);   
 }
 console.log(getNums());
 
 //get random symbol//
 function getSymbols() {
   var sym = "!@#$%^&*()_=-/\+?";
   return sym[Math.floor(Math.random()*sym.length)];
 }
 console.log(getSymbols());
 
 
 
 // generate finalpassword//
 function generatePassword() {
   var FinalPassword= "";
   for(var i=0; i < strength; i++){
     
     if (upper && FinalPassword.length<strength) {
       FinalPassword += getUpper();
     }
     if (lower && FinalPassword.length<strength) {
       FinalPassword += getLower();
     }
     if (number && FinalPassword.length<strength) {
       FinalPassword += getNums();
     }
     if (symbols && FinalPassword.length<strength) {
       FinalPassword += getSymbols();
     } 
   }
   return FinalPassword;
 }
 
 
   
 ///////////////////////////////////////////////////////////////////////
 // DO NOT TOUCH THIS CODE
 //
 // This code handles:
 // * clicking the Generate Password
 // * writing the password to the screen
 //
 
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 //////////////////////////////////////////////////////////////////////
 
 
 
 
