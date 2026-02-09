// call by value and call be reference concept

//** */ kis tareeke se data ko memory mein store kiya jata hai and kis trah se memory se data ko acces kiya jata hai 
//* us basis pr data ki 2 categories banti hai
// 1. Primitive data types => number , string , boolean , null , undefined , symbol , bigInt
// 2. Non-primitive data types => objects , arrays , functions


//? p.datatypes => call by value // ye stack memory mein store hote hain
// isko store karne ke liye memory mein alag alag box bante hain and har box ka apna ek address hota hai
//? np.datatypes => call by reference // ye heap memory mein store hote hain
// isko store karne ke liye memory mein ek box banta hai jisme data ka address store hota hai , aur wo address us data ke actual box ka address hota hai

//----------------------------------------------------//
const id = Symbol("123");   
const newid = Symbol("123");
console.log(id == newid); // false => kyuki symbol ka har ek value unique hota hai , chahe value same hi kyu na ho
console.log(id === newid); // false => kyuki symbol ka har ek value unique hota hai , chahe value same hi kyu na ho


//----------------------------------------------------//
// in heap memory , reference pr change hota hai so main v change ho jata hai but stack memory mein value pr change hota hai so main v change nhi hota hai

//? STRING
const s1  = "hey";
const s2 = 90;

console.log(s1 + s2 + " hey");

console.log(`${s1} my name is ataulah and my age is ${s2}`);

const s3 = new String("naxish"); //? yahan pr humne object create kiya hai string ka , to ye non primitive data type bn jata hai and heap memory mein store hota hai , to ye call by reference ke under aata hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access kar
//! dekho aisa krna se kya hota hai humhe console.log krne 
//! [string: 'naxish'] ke form mein o/p milega toh ye ek object bn gya hai key-values ke form mein : toh isko access krne ke liye we use valueOf() method to get the primitive value of the string object 

console.log(s3);
console.log(s3.valueOf()); //? yahan pr humne valueOf() method ka use kiya hai to get the primitive value of the string object , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai , to isko access karne ke liye hume uske address ko access karna padega , to ye ek object ban jata hai jisme string ka value store hota hai ,
console.log(s3.__proto__);
console.log(s3.toUpperCase()); //* yahan pr uppercase func lagane se original value change nhi hui hai s3 ki bs humne heap se reference liya hai aur us reference pr change kiya hai to original value change nhi hui hai.
console.log(s3);
console.log(s3.charAt(2));
console.log(s3.indexOf('x'));

const newString = s3.substring(1, 4)  //? yahan pr 1 se start hota hai and 3 tak jayega 4 ko nhi lega
console.log(newString);

const s4 = s3.substring(1)    //? yahan pr 1 se start hota hai and end tak jayega
console.log(`the s4 value is ${s4}`);

const anotherString = s3.slice(-5,4)  // here 6-5 bana 1 toh 1 se start and 4 se pehle tak jayega 4 ko nhi lega
console.log(anotherString);

const s5 = s3.slice(-5)  //? yahan pr -5 se start hota hai and end tak jayega
console.log(s5);

const s6 = s3.slice(-1)
console.log(s6);

console.log("------------------------TRIM-------------------");

const s7 = "   hello world   ";
console.log(s7);
console.log(s7.trim()); // trim() aage ppeche dono taraf se space hat deta hai 
//* trimStart() aage se space hat deta hai // trimEnd() piche se space hat deta hai

const url = "https://www.ataullah-dev.com/about%20section";
url.split("/").forEach((part) => {
    console.log(part);
});

/*
https://www.ataullah-dev.com/about%20section
Step 1: split("/") actually kya karta hai?

split("/") ka matlab:

jahan-jahan / mile, wahan string tod do

Tumhari URL:

https://www.ataullah-dev.com/about%20section


Isme / yahan-yahan hai 👇

https: // www.ataullah-dev.com / about%20section

So split("/") ka result array hota hai:

[
  "https:",
  "",
  "www.ataullah-dev.com",
  "about%20section"
]

Step 2: Output line-by-line kyun aaya?

Tum [forEach] se ek-ek item print kar rahe ho:

https:
(empty string skip jaisa lag raha)
www.ataullah-dev.com
about%20section

❓ Wo empty line kyun?

Because of this part 👇

https://
      ^^  / uske just baad ek aur / hai jo split ke time ek empty string create kar deta hai. So wo empty string bhi print ho jata hai.
Do slashes (//) ke beech kuch nahi hai → empty string ""
JS usko bhi array ka element maanta hai.

*/

console.log(url.replace("%20", '-'));
console.log(url.includes("xxx"));

const s9 = "nazish-is-a-developer-but-he-do-"
console.log(s9.split("-"));




















