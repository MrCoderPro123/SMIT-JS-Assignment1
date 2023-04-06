// Question no 1
// Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

// let num1 = +prompt("Enter a Number:");
// let num2 = +prompt("Enter another Number:");

// if (num1 > num2) {
//     console.log(num1);
// }else{
//     console.log(num2);
// };


// Question no 2
// Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

// let num = +prompt("Enter a Number");

// if (num >= 0) {
//     alert("The sign is +");
// }else{
//     alert("The sign is -");
// };


// Question no 3
// . Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console

// let num1 = +prompt("Enter first Number:");
// let num2 = +prompt("Enter second Number:");
// let num3 = +prompt("Enter third Number:");
// let num4 = +prompt("Enter forth Number:");
// let num5 = +prompt("Enter fifth Number:");

// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log(num1);
// }
// else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     console.log(num2);
// }
// else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     console.log(num3);
// }
// else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     console.log(num4);
// }
// else{
//     console.log(num5);
// };


// Question no 4
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen

// for (let i = 0; i <= 15; i++) {
//     if ( i % 2 === 0){
//             document.write( i + " is even" ,"<br/>");
        
//     }else{
//         document.write(i + " is odd", "<br>");
//     }
// }


// Question no 5
//  Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

// let marks = +prompt("Enter your average marks (Total: 100)");
// let grade = "";

// if (marks > 90 && marks <= 100) {
//     grade = "A";
// }
// else if (marks > 80 && marks <= 90) {
//     grade = "B";
// }
// else if (marks > 70 && marks <= 80) {
//     grade = "C";
// }
// else if (marks > 60 && marks <= 80) {
//     grade = "D";
// }
// else if (marks <= 60 && marks >= 0) {
//     grade = "F";
// }
// else{
//     grade = "Invaled Number";
// }

// alert("Your Grade is " + grade);


// Question no 6
//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }

// Question no  7
//. Write a JavaScript program to construct the following pattern, using a nested for loop.

// for (let i = 1; i <= 5; i++) {
//     let star = '';
//     for (let j = 1; j <= i; j++) {
//       star += '* ';
//     }
//     console.log(star);
//   }
  
