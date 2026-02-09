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



console.log("------------------------MATHS--------------------------");

console.log(Math);
// console.log(Math.abs(-6));  //? absolute value
// console.table([Math.round(4.6), Math.round(4.3)]);  //? round off the number
// console.table([Math.ceil(4.3), Math.ceil(4.7)]);  //? isme bada hi karega up the number
// console.table([Math.floor(4.7), Math.floor(4.3)]); //? isme chota hi karega down the number

console.log(Math.random()); //? 0 se 1 ke beech me random number generate karta hai

let date = new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toLocaleString());



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











