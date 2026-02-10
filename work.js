// this is for number 
// this is for maths

// const num = new Number(500)
// console.log(num);   //? object bana rahe hum aise 

// console.log(num.toString().length);  //? number ko string me convert karne ke liye toString method ka use karte hai
// console.log(num.toFixed(2));  //? number ko string me convert karne ke liye toFixed method ka use karte hai, isme hum decimal point ke baad kitne number chahiye wo specify karte hai

// //! precision 

// const num2 = 123.8567899
// console.log(num2.toPrecision(3));

// let n = 100000000000 //? difficult to read
// console.log(n.toExponential());  //? number ko exponential form me convert karne ke liye toExponential method ka use karte hai
// console.log(n.toLocaleString());  //? isse us standard mein dikhega 
// console.log(n.toLocaleString('en-IN'))  //? isse Indian standard mein dikhega



//console.log("------------------------MATHS--------------------------");

//onsole.log(Math);
// console.log(Math.abs(-6));  //? absolute value
// console.table([Math.round(4.6), Math.round(4.3)]);  //? round off the number
// console.table([Math.ceil(4.3), Math.ceil(4.7)]);  //? isme bada hi karega up the number
// console.table([Math.floor(4.7), Math.floor(4.3)]); //? isme chota hi karega down the number

// console.log(Math.random()); //? 0 se 1 ke beech me random number generate karta hai

// let date = new Date()
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleString());



//?     STACK vs HEAP 

/*
Pehle one-line truth

Primitive → Stack
Non-primitive (objects) → Heap

Bas. Ab detail.

🧱 STACK (simple + fast memory)
Stack mein kya jata hai?

number

string

boolean

null

undefined

symbol

bigint

Example
let a = 10;
let b = a;

b = 20;

Memory mein kya hua?
STACK:
a → 10
b → 10  (copy bana)


Jab b = 20:

STACK:
a → 10
b → 20


👉 a pe koi effect nahi
Kyun? Kyunki copy bana tha

✅ Stack = copy by value

🏗️ HEAP (reference wali memory)
Heap mein kya jata hai?

object

array

function

Example
let obj1 = { name: "Ata" };
let obj2 = obj1;

obj2.name = "Ali";

Memory reality
STACK:
obj1 → 📍0x101
obj2 → 📍0x101

HEAP:
0x101 → { name: "Ali" }


👉 Dono same memory ko point kar rahe hain

Isliye:

console.log(obj1.name); // "Ali"


❌ Copy nahi bana
✅ Reference pass hua

⚠️ Sabse common bug (interview favorite)
let arr1 = [1,2,3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // ?


Answer:

[1, 2, 3, 4]


Kyun?

Array → Heap

arr1 aur arr2 → same reference

🛠️ Heap se copy kaise banayein? (IMPORTANT)
✔ Shallow copy
let arr2 = [...arr1];
let obj2 = { ...obj1 };

✔ Deep copy (safe)
let obj2 = JSON.parse(JSON.stringify(obj1));

🧠 Stack vs Heap (final table)
Stack	Heap
Primitive values	Objects / Arrays
Copy by value	Copy by reference
Fast	Thoda slow
Independent	Shared memory
Ek line mein interview answer

JavaScript primitives are stored in stack, objects are stored in heap and variables hold references.

*/

//  [] = bracket , {} = curly braces , () = parenthesis


//!            ARRAYS


/*
Guys i hope you still have memory of HCF, LCM, Arithmatic sum, exponential sum, algebraic sum etc.

We will be using some ahead extensively.

Basic maths and basic fundamentals of programming / data structures should be clear for all

https://www.w3schools.com/dsa/dsa_intro.php

Please have a hobby of active learning
1 - reviewing DS
2 - Trying AI Tools, and sharpening prompt writing skills
3 - Explore school time math + by heart table till 25
4 - Get strong hold of 2-3 programming languages inside out
5 - Cybersecurity
6 - Neural Networks

This is must if you see yourself continuing with Enigma post March 2026.

You will go through some tests each quarter, last week, which will decide your continuity & pay appreciations as well.

A 3 hr weekend test (code + fundamentals) and you have score min 50% to continue.
*/

//? Array copy 

//? js array - copy operations create shallow copy 
//? shallow copy - copy of reference is created, original and copy both point to same memory location
//? deep copy - copy of value is created, original and copy both point to different memory location

//* all standard built in copy operations with in js objects create shallow copy rather than deep copy.

const arr1 = [ 1,3,5,7,9 ]
const arr = new Array(1,2,3,4,4)

// console.log(arr);

// //? push => add element at end of array 
// arr.push(6)
// arr.pop() //? pop=> remove last element only
// console.log(arr);

//? unshift => add element at start of array
//? shift => remove first element only
//? join => convert array to string with given separator

// const newarr = arr.join()  //? array ko string me convert karne ke liye join method ka use karte hai, isme hum separator specify karte hai
// console.log(newarr);  //? default separator comma hota hai

// const newarr = arr.join("-")
// console.log(newarr);  //? separator hyphen hai

// console.log(typeof newarr);

//! slice v/s splice 

//? slice => original array ko modify nahi karta hai, splice => original array ko modify karta hai

// const a = [1,2,3,4,5]
// const b = a.slice(1,4)
// console.log(b); //? original array ko modify nahi karta hai
// console.log(a);

// const c = a.splice(1,3)
// console.log(a);  //? original array ko modify karta hai, splice method ke baad a array me sirf 1 aur 5 bachega
// console.log(c);

const indianHero = ["gandhi","bhagat","nehru"]
const marvelHero = ["ironman","spiderman","hulk"]
// marvelHero.push(indianHero)
// console.log(marvelHero);
// //console.log(marvelHero);

const newARR = marvelHero.concat(indianHero) //? concat method se do array ko jod sakte hai, isme original array modify nahi hota hai
//console.log(newARR);

const newwarr = [...marvelHero, ...indianHero] //? spread operator se bhi do array ko jod sakte hai, isme original array modify nahi hota hai
//console.log(newwarr);















































