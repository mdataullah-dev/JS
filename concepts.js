"use strict"; // treat all the JS code as newer version

//? alert("Hello World!"); // popup message
//? we are using nodejs not brower so alert will not work here
//? alert(3+3);
//* in broweser we have console there we can use alert

//! DATA TYPES 

// null = standalone value that represents nothingness
//undefined = a variable that has been declared but not assigned a value yet

// symbol = a data type whose instances are unique and immutable
//? for unique we use symbol { use in react}

// console.log(typeof null); // object  //! null is type of object
// console.log(typeof undefined); // undefined
// console.log(typeof 123n); // bigint
// console.log(typeof Symbol("id")); // symbol

//===================================================================//

let score = "100";
console.log(typeof(score));
console.log(typeof score);

//? this is conversion of string to number 
let newValue = Number(score)  // here Number is a function that converts string to number
console.log(typeof newValue);

//! concept 

let x = "100abc"
console.log(typeof x);
let y = Number(x);
console.log(typeof y);  // conversion toh ho gya but this is not a valid number so it guives NaN
console.log(y); // NaN => Not a Number

console.log("================================");
//suppose  we do :
let a = null;
let b = Number(a);
console.log(b); // 0 => null is considered as 0 in number conversion


let c = undefined;
let d = Number(c);
console.log(d); // NaN => undefined is not a valid number so it gives NaN

//? string ko "histesh" isko text wale ko number mein karengein toh "NaN ayega kyuki "histesh" is not a valid number
//? true boolen ko karengein toh 1 dega and false boolen ko karengein toh 0 dega

//? Number ki trah Boolean v hota hai 

//! 1 => true , 0 => false  [  conversion of number to boolean  ]
//! "" => false , "abc" => true

console.log("------------------OPERATIONS-------------------");

let num1 = 10
let num2 = -num1
console.log(num2); // -10

console.log(2**2); // ** means power => 2 to the power of 2 which is 4


console.log("-----------------comparisions-----------------");

//? == means only value check hoga and conversion bhi kr deta hai 
console.log("2" == 2);  // ye true de dega kyu ki ye value check kar raha hai aur "2" ko number mein convert kar dega
console.log("2" != 2);  // ye false de dega kyu ki ye value check kar raha hai aur "2" ko number mein convert kar dega
//? === means value and data type dono check hoga , & conversion nhi karega 
console.log("2" === 2); // ye false de dega kyu ki ye value ke sath sath data type bhi check kar raha hai , aur "2" string hai aur 2 number hai
console.log("2" !== 2); // ye true de dega kyu ki ye value ke sath sath data type bhi check kar raha hai , aur "2" string hai aur 2 number hai

//===================================================================// 







