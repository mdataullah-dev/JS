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

console.log(typeof null); // object  //! null is type of object
console.log(typeof undefined); // undefined
console.log(typeof 123n); // bigint
console.log(typeof Symbol("id")); // symbol
