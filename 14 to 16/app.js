// //question 1////

// const student = [];

// //question 2////
// let students = [];
// //question 3////
// var myArray = ["apple", "banana", "cherry", "date"];
// console.log(myArray);
// //question 4////
// var myArray = [1, 2, 3, 4, 5];
// console.log(myArray); const myArray = [true, false, true, true, false];
// //question 5//

// const myArray = [true, false, true, true, false];

// console.log(myArray);
// console.log(myArray);
// //question 6//

// var myArray = ["apple", 2, true, {name: "John", age: 25}];

// console.log(myArray);

// //question 7//

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>List of Qualifications:</h1>");
// document.write("<ul>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write(`<li>${qualifications[i]}</li>`);
// }
// document.write("</ul>");

// //question 8//

// let names = ["Alice", "Bob", "Charlie"];
// let grade = [420, 380, 450];
// let percentages = [];
// for (let i = 0; i < grade.length; i++) {
//   let percentage = (grade[i] / 500) * 100;
//   percentages.push(percentage);
// }
// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]} scored ${grade[i]} out of 500, which is ${percentages[i]}%`);
// }


// //question 9///

// let colors = ["red", "green", "blue"];
// document.write(`<p>Original Array: ${colors}</p>`);
// let colorToAddAtStart = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorToAddAtStart);
// document.write(`<p>Array after adding ${colorToAddAtStart} at the beginning: ${colors}</p>`);
// let colorToAddAtEnd = prompt("Enter a color to add at the end:");
// colors.push(colorToAddAtEnd);
// document.write(`<p>Array after adding ${colorToAddAtEnd} at the end: ${colors}</p>`);
// colors.unshift("yellow", "orange");
// document.write(`<p>Array after adding yellow and orange at the beginning: ${colors}</p>`);
// colors.shift();
// document.write(`<p>Array after deleting the first color: ${colors}</p>`);
// colors.pop();
// document.write(`<p>Array after deleting the last color: ${colors}</p>`);
// let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// let colorToAdd = prompt("Enter a color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write(`<p>Array after adding ${colorToAdd} at index ${indexToAdd}: ${colors}</p>`);
// let indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
// let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// document.write(`<p>Array after deleting ${numberOfColorsToDelete} colors from index ${indexToDelete}: ${colors}</p>`);


// ///question 10//

// let scores = [85, 92, 78, 90, 88];

// scores.sort(function(a, b) {
//   return a - b;
// });
// console.log(scores);
// //question 11//

// let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
// let selectedCities = cities.slice(1, 4);
// console.log(selectedCities);

// //question 12//

// let arr = ["This", "is", "my", "cat"];
// let str = arr.join(" ");
// console.log(str);


// // question 13//

// let fifo = [];
// fifo.push("keyboard");
// fifo.push("mouse");
// fifo.push("printer");
// fifo.push("monitor");
// console.log(fifo);
// console.log(fifo.shift()); 
// console.log(fifo.shift()); 
// console.log(fifo.shift()); 
// console.log(fifo.shift());

// question 14//


// let lifo = [];
// lifo.push("keyboard");
// lifo.push("mouse");
// lifo.push("printer");
// lifo.push("monitor");
// console.log(lifo);
// console.log(lifo.pop()); 
// console.log(lifo.pop());
// console.log(lifo.pop()); 
// console.log(lifo.pop());
//question 15//
var phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
var selectHTML = '<select>';
for (var i = 0; i < phoneManufacturers.length; i++) {
  selectHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}
selectHTML += '</select>';
document.write(selectHTML);
