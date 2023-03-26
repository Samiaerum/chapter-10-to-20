// ////<--- question 1--->/////

// var cityname = prompt("write your city name?",);
// if(cityname.toLocaleLowerCase()---"karachi")
// {
// console.log("welcome to city of lights");}
// else{
//  console.log("welcome to" + cityname);
// }

// <----question 2---->

 var gender = prompt("write gender?" ,);
if(gender==="male")

alert("good morning sir");
else(gender==="female")

alert("good morning mam")

///<--question 3--->////

var color= prompt("red",);

if(color==="red")
{
alert("must stop");}
var color =prompt("yellow",);
if(color==="yellow")
{
alert("ready to move")}

var color =prompt("green",);
if(color==="green")
{
alert(" move now")}

/////<--- question 4--->/////

// Ask user for remaining fuel in car
let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");

// Check if fuel is less than 0.25 litres
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
}

////<--- question 5--->/////

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// ///<--- question 6--->/////

 var subject1 = prompt("Enter marks obtained in subject 1");
var subject2 = prompt("Enter marks obtained in subject 2");
var subject3 = prompt("Enter marks obtained in subject 3");
var totalMarks = (300);

// Converting the input strings to numbers using the Number() function
var marks1 = Number(subject1);
var marks2 = Number(subject2);
var marks3 = Number(subject3);
var total = Number(totalMarks);

// Calculating the percentage
var percentage = (marks1 + marks2 + marks3) / total * 100;

// Rounding off the percentage to 2 decimal places
percentage = percentage.toFixed(2);

// Calculating the grade and remarks based on percentage
var grade, remarks;

if (percentage >= 80) {
  grade = "A one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage >= 50) {
  grade = "Fail";
  remarks = "Sorry";
} else {
  grade = "N/A";
  remarks = "No remarks";
}

// Displaying the result on the page
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + total + "<br>");
document.write("Marks obtained: " + (marks1 + marks2 + marks3) + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);





// ///<--- question 7--->/////

var secretNumber = 7;
var guess = prompt("Guess the secret number (between 1 and 10):");

if (guess == secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guess == secretNumber - 1 || guess == secretNumber + 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, try again.");
}

// ///<--- question 8--->/////
// Take input from user
const num = parseInt(prompt("Enter a number: "));

// Check if number is divisible by 3
if (num % 3 === 0) {
  console.log(`${num} is divisible by 3`);
} else {
  console.log(`${num} is not divisible by 3`);

}

// ///<--- question 9--->/////

// var num=prompt("enter your favorite no");
// if(num %2===0){
//     console.log("this is even no");
// }
// else{
//     console.log("this is odd no");
// }



// ///<--- question 10-->/////

let temperature = prompt("Enter the temperature in Celsius:");
temperature = parseInt(temperature);

if (temperature > 40) {
  document.write("It is too hot outside.");
} else if (temperature > 30) {
  document.write("The Weather today is Normal.");
} else if (temperature > 20) {
  document.write("Today’s Weather is cool.");
} else if (temperature > 10) {
  document.write("OMG! Today’s weather is so Cool.");
} else {
  document.write("Enter a valid temperature.");
}


// ///<--- question 11--->/////

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  let result = num1 + num2;
  console.log(`${num1} + ${num2} = ${result}`);
} else if (operation === "-") {
  let result = num1 - num2;
  console.log(`${num1} - ${num2} = ${result}`);
} else if (operation === "*") {
  let result = num1 * num2;
  console.log(`${num1} * ${num2} = ${result}`);
} else if (operation === "/") {
  let result = num1 / num2;
  console.log(`${num1} / ${num2} = ${result}`);
} else if (operation === "%") {
  let result = num1 % num2;
  console.log(`${num1} % ${num2} = ${result}`);
} else {
  console.log("Invalid operation");
}
