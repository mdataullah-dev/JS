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


//? flat => nested array ko single level array me convert karne ke liye use hota hai
const nestedArr = [1,2,[3,4],[5,6,[7,0,0],9,[0]]]
const flatArr = nestedArr.flat(Infinity) //? flat method se nested array ko single level array me convert kar sakte hai, isme original array modify nahi hota hai
//console.log(flatArr);

// console.log(Array.isArray("Nazish")); //? isArray method se check kar sakte hai ki given value array hai ya nahi, isme string pass karne par false return karega
// console.log(Array.from("Nazish")); //? from method se string ko array me convert kar sakte hai, isme string pass karne par array return karega


console.log(Array.from({name:"Nazish"}));
//? iska o/p [] empty aya why? => .from bs 2 se array bana skta hai 1? iterable (string, array, set, map) ya array-like object (numeric keys + length property) se array bana sakta hai, tumhara object neither iterable hai na array-like, isliye empty array return hua

/*
Tumhara code
console.log(Array.from({ name: "Nazish" }));

Output
[]

❓ Empty array kyun aaya?

Array.from() sirf do cheezon se array bana sakta hai:

Iterable (jinko loop kiya ja sake)

string

array

Set, Map

Array-like object

jisme numeric keys (0,1,2...) ho

aur length property ho

Tumhara object kya hai?
{ name: "Nazish" }


❌ Iterable nahi

❌ Numeric keys nahi (0,1,2)

❌ length property nahi

Isliye JS bolta hai:

“Isse array kaise banao?”
Aur safe answer deta hai → []

✅ Kaise kaam karega? (correct ways)
✔ Object values se array
Array.from(Object.values({ name: "Nazish" }));


Output:

["Nazish"]

✔ Object keys se array
Array.from(Object.keys({ name: "Nazish" }));


Output:

["name"]

✔ String ke saath (iterable hai)
Array.from("Nazish");


Output:

["N","a","z","i","s","h"]

✔ Array-like object example
Array.from({0:"A",1:"B",length:2});


Output:

["A","B"]

🧠 One-line rule (yaad rakh lo)

Array.from() object ko tabhi array banata hai jab wo iterable ya array-like ho

🔥 Interview trap

Question:

Why Array.from({}) gives []?

Answer:

Because plain objects are neither iterable nor array-like.

*/


//? .of => array of method se hum kisi bhi value ko array me convert kar sakte hai, isme original value modify nahi hoti hai

const score1 = 90
const score2 = 80
const score3 = 70
//console.log(Array.of(score1,score2,score3));

//                 !          OBEJECTs

//? singleton object => ek hi instance create hota hai, usi instance ko baar baar use karte hai, isse memory efficient banate hai

//? jab literals se object create karte hai to wo singleton object hota hai, kyunki literals se object create karne par ek hi instance create hota hai, usi instance ko baar baar use karte hai
//? jab constructor function se object create karte hai to wo singleton object nahi hota hai, kyunki constructor function se object create karne par har baar naya instance create hota hai, isliye wo singleton object nahi hota hai

//! object literal

const obj1 ={}  // this is obkject literal, isme hum directly object create karte hai, isme ek hi instance create hota hai, usi instance ko baar baar use karte hai, isliye ye singleton object hota hai
const o = Object.create({name:"Nazish"}) // ye constructor function se object create karne ka tarika hai, isme har baar naya instance create hota hai, isliye ye singleton object nahi hota hai

console.log(obj1);
console.log(o.name);

const mysym = Symbol("id")
//* add this symbol in object as property key
const JsUser = {
    name : "Md Ataullah",
    "Full Name" : "Md Ataullah Khan",
    age : 22,
    // mysym : 101,
    [mysym] : "x101",
    email : "ataullah@gmail.com",
    location : "Bihar"
}

console.log(JsUser.email); //? dot notation se object ke property ko access kar sakte hai, isme property name directly likhte hai
console.log(JsUser["email"]); //? bracket notation se object ke property ko access kar sakte hai, isme property name string me likhte hai, isme variable bhi use kar sakte hai
console.log(JsUser["Full Name"]);
//console.log(JsUser.mysym); //? symbol nhi raha bumber bn chuka hai 
//console.log(typeof JsUser.mysym); //? symbol banane ke liye inside object we make sym key inside bracket notation and assign symbol value to it, isliye ye symbol ban gaya hai, isme hum symbol ko property key ke roop me use kar sakte hai, isme hum symbol ko property value ke roop me bhi use kar sakte hai, isme hum symbol ko variable ke roop me bhi use kar sakte hai
console.log(JsUser[mysym]);
console.log(JsUser);
//console.log(JsUser.Full Name); //? isme error aayega kyunki property name me space hai, isliye dot notation se access nahi kar sakte hai, bracket notation se access karna padega

JsUser.email = "aaa@google.com"
console.log(JsUser);

// agar koi chnage na kare object then 
//Object.freeze(JsUser)

// JsUser.age = 29
// console.log(JsUser);
/*
[]
{}
Nazish
ataullah@gmail.com
ataullah@gmail.com
Md Ataullah Khan
x101
{
  name: 'Md Ataullah',
  'Full Name': 'Md Ataullah Khan',
  age: 22,
  email: 'ataullah@gmail.com',
  location: 'Bihar',
  [Symbol(id)]: 'x101'
}
{
  name: 'Md Ataullah',
  'Full Name': 'Md Ataullah Khan',
  age: 22,
  email: 'aaa@google.com',
  location: 'Bihar',
  [Symbol(id)]: 'x101'
}
file:///C:/Users/ACER/Documents/REACTJS/JS/work.js:402
JsUser.age = 29
           ^

TypeError: Cannot assign to read only property 'age' of object '#<Object>'      
    at file:///C:/Users/ACER/Documents/REACTJS/JS/work.js:402:12
    at ModuleJob.run (node:internal/modules/esm/module_job:345:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:651:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

Node.js v22.19.0
PS C:\Users\ACER\Documents\REACTJS\JS> 
*/

JsUser.greetins = function(){
    console.log("hello Viewer"); 
}

JsUser.greet = function(){
    console.log(`hello viewer you are seeing ${this.name} details`);  
}

console.log(JsUser.greetins);
console.log(JsUser.greetins());
console.log(JsUser.greet);
console.log(JsUser.greet());













































