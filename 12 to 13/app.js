///////////////QUES 1////////////////////////
let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log(input + " is a number");
} else if (ascii >= 65 && ascii <= 90) {
  console.log(input + " is an uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
  console.log(input + " is a lowercase letter");
} else {
  console.log(input + " is not a valid input");
}
/////////////////QUES 2////////////////////////////////
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
  console.log(num1 + " is larger");
} else if (num2 > num1) {
  console.log(num2 + " is larger");
} else {
  console.log("The two integers are equal");
}
//////////////////QUES 3///////////////////////////////
function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isVowel('a'));  // Output: true
  console.log(isVowel('b'));  // Output: false



/////////////////QUES 5////////////////////////////////
// Define the correct password
const correctPassword = 'hey cutie';

// Prompt the user to enter their password
const userPassword = prompt('Enter your password:');

// Check if the user entered a password
if (!userPassword) {
  alert('Please enter your password.');
} else if (userPassword === correctPassword) {
  alert('Correct! The password you entered matches the original password.');
} else {
  alert('Incorrect password.');
}
//////////////////QUES 6////////////////////////////////////
var greeting;
var hour = prompt("WELCOME");
if(hour<18)
{alert("Good day");
}
else(hour>18)
{
    alert("Good evening")
} 
////////////////QUES 7//////////////////////////////////
function showTime(){
   var dt=new Date();
   var hh=dt.getHours();
   var mm=dt.getMinutes();
   var ss=dt.getSeconds();
   var h1,m1,s1;
if(hh<10)
h1="0"+hh;
else
h1=hh;
if(mm<10)
m1="0"+mm;
else
m1=mm;
if(ss<10)
s1="0"+ss;
else
s1=ss;
var time1=h1+":"+m1+":"+s1;
document.getElementById("sp2").innerHTML=time1;

}
function call()
{
setInterval(showTime,1000);



}

/////////////////QUES 4////////////////////////////////

var aeiou = prompt("Enter a character:");
var isVowel = false;

if (input.length == 1) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
    if (aeiou.toLowerCase() == vowels[i]) {
      isVowel = true;
      break;
    }
  }
}

if (isVowel) {
  document.write(aeiou + " is a vowel.");
} else {
  document.write(aeiou + " is not a vowel.");
}