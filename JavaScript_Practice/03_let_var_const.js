console.log("Javascript tutorial 3: var, let and const")
 

var a = 45;
var a = "p";  // var can be  redeclare within its scope
a = 44;       //var can be update & 
console.log(a);

var b= "Anuj";
var c = null;
var d = undefined;

{
     var b = 'this';
    console.log(b);   //var has global scope so it print 2 time this 
 }
 console.log(b);
 



let x = 5;
// let x = 10; //let can not be redeclare
x = 500;       // But let can be update 
console.log(x);

let y = "anuj";
{
    let y = "Kanada"; //let has block scope so it print first kanada after that anuj 
    console.log(y);
} 
console.log(y);


// const can not be redeclare and update 

const author = "Anuj Kanada" // can not change
// author = "me"; // const ko kyu badal rahe ho bhai wo const hi he to
// let author = "ak"; // Throws an error bcz constant cannot be changed

console.log(author);


