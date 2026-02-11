  //? LOOPS 


for (let i = 1; i <= 10; i++) {
    const element = i;
    //console.log(element);
    
    
}


for (let i = 1; i <= 10; i++) {
    if(i==5){
        //console.log(`EXIT ${i} Detected`);
        //break;
        //?console.log(`skipping ${i}`);
        //?continue;
        
    }
    //console.log(i);
}

//? while and do-while loops 
let heros = new Array(1,2,4,4,5)
let i = 0
while(i<=heros.length){
    //?console.log(`the element is ${heros[i]}`);
    i++;
    
}   //? last mein undefined aa gya coz humne wahan pr <= kr diya is wajah se undefined aaya


//? do-while

let score = 100;
do{
    //?console.log(`score is ${score}`);
    score++;
    
}while(score<=110)

//!=================================================================
//? for of 

//*let arr = [{},{},{}]

let arr = new Array(1,4,4,4,4,0)

for (const i of arr) {
    //console.log(arr[i]);  //? for of value deta hai index nhi  yahan pr i arr ke value ko piont kr raha hai
    
}

for (const i of arr) {   // i = element if this arr not index
    //?console.log(i);  //? for of value deta hai index nhi  yahan pr i arr ke value ko piont kr raha hai
    
}


/*
Tumhara array
let arr = new Array(1,4,4,4,4,0);


Array actually hai:

Index:  0 1 2 3 4 5
Value:  1 4 4 4 4 0

🔹 Case 1
for (const i of arr) {
    console.log(arr[i]);
}


⚠ Important:

for...of value deta hai
index nahi deta

Toh loop mein:

i = 1
i = 4
i = 4
i = 4
i = 4
i = 0


Ab tum kar rahe ho:

arr[i]


Matlab:

i value	arr[i]
1	arr[1] → 4
4	arr[4] → 4
4	arr[4] → 4
4	arr[4] → 4
4	arr[4] → 4
0	arr[0] → 1

Isliye output aaya:

4
4
4
4
4
1

🔹 Case 2
for (const i of arr) {
    console.log(i);
}


Yahan tum direct value print kar rahe ho

Toh output simple hai:

1
4
4
4
4
0

🧠 Main Concept
for...of

👉 value deta hai

for...in

👉 index deta hai

Example:

for (const i in arr) {
    console.log(i);   // index
}


Output:

0
1
2
3
4
5

💥 Golden Rule
Loop	Kya milta hai
for...of	value
for...in	index
Agar index chahiye (safe way)
arr.forEach((value, index) => {
    console.log(index, value);
});
*/

const greeting = "hello World!"
for (const element of greeting) {
    //console.log(element);   //? ye isme se present string ka ek ek element ko pint kr raha hai 
    
}


//? MAPS - unique values hoti hain  = no duplicate
//? map apne app mein ek object hai - which holds key-value pairs

const map = new Map()
map.set('in' , 'india')
map.set('fr' , 'france')
map.set('usa' , 'america')
map.set('in' , 'india')     //? duplicate add kr rahe but lega nhi

//console.log(map);  //? Map(3) { 'in' => 'india', 'fr' => 'france', 'usa' => 'america' }

for (const i of map) {
    //console.log(i);
    
}

for (const [k , v ] of map) {
    // console.log(`${k} => ${v}`);
    // console.log(`${v} > ${k}`);
    
}


//? in object of js can we apply for - of loop ? => NO

// const newObj = {
//     game1 : "GTA-*",
//     game2 : "Asphalt-*"
// }
// for (const {k,v} of newObj) {
//     console.log(k , v );
    
// }
//! FOR IN LOOP
const o = {              //? for in loop use for object iteration
    js : "javascript",
    cpp : "C++",
    p : "python",
    r : "rust"
}

for (const key in o) {
    //console.log(key);     //? for in loop index deta hai 
    //console.log(o[key]);     
}


const nums = [ 2 , 3 , 4 , 5 , 6]   // for in loop indec preint kr deta hai 
for (const index in nums) {
    //console.log(index);   // ? index miklega 0 1 2 3 4 
    
    //console.log(nums[index]);  // array elemet milega
    
    
}



//!     FOR EACH LOOP

// for each loop for array 

const coding = [ "python" , "java" , "c++" , "c" , "c#"]

//? array pr hamaree pass .foreach property hoti use krne ka 
//? isko use kr skte and isme hum log daalte hain callback function
//? callback function = jiska koi name na ho 

coding.forEach( function (i) {  //? i = params haoi jo 1 by 1 coding ka elemet lega
    //console.log(i);
    
} )

//? using arrow func  :    ( )  => { }

//coding.forEach( (i) => {console.log(i)} )


coding.forEach( (item , index , arr) => {//console.log(item, index, arr);
})

const arrobj = [
    {
        language : "javascript",
        file : ".js"
    },
    {
        language : "java",
        file : ".java"
    },
    {
        language : "python",
        file : ".py"
    }
]
arrobj.forEach( (item) => {  //? yahan pr item jo hai vo pura ka pura 1 object lega araay ke ander se 
    //console.log(`${item.language} : ${item.file}`);
    
})      



//======================================================//

//for each : new things to learn 

// forEach do not return anything but we for returning we can use filter : filer v leta hai callback func

let arr1 = [ 2,3,3,4,5,5,6,9]
const aarayValues = arr1.forEach(  (item) => {
    //console.log(item);
    return item
})
console.log(aarayValues);    //? we get undefined ? coz foreach does not return anything


//? for returing we use filter   and isme jo true hai wahi pass hoga 

// const r = arr1.filter( (i)  => {
//     //console.log(i);
//     return i
    
// })
// console.log(r);


// const r = arr1.filter( (i)  => i>4)      //? ye value return karega 
// console.log(r);

//? in arrow func : we we use ()  or direct write we dont need to use return 
// const r = arr1.filter( (i)  => (i>4)  )      //? ye value return karega 
// console.log(r);


//! filter mein hota hai :       arrayname.filter( (element) => condition )
//?                                                 arrow function hai  
//?                                                 (item)  => condition    :directly no need type return
//?                                                 ()  => (condition)
//?                                                 ()  => { return condition}
 
//? but we use {} i.e we need to return
const r = arr1.filter( (i)  => {
    return i>4
})      //? ye value return karega nhi karega without using return keyword
console.log(r);



//!   .map operation 

let arr9 = [ 4,5,6,7,8,0]

// const newarr = arr9.map( (eacHitem) => eacHitem * 10 )
// console.log(newarr);


//? chaining : .map.mao.filter

//* filter => condition ka game true/false { true hua toh return varna [] nothing }
//* map => main koi condition nhi hum kuch v return kr skte kaam kr ke 

const newarr = arr9
               .map( (eacHitem) => eacHitem * 10 )   //? yahan pr new array bn chuka vo pass hoga neeche wale .map ko 
               .map( (eacHitem) => eacHitem + 1)    //? hum kuch v naam rakh skte uske item ka 
               .map( (i) => i/2)
               .filter( (j) => j > 20 )   //? filter mein condition lagao agar condition true hui yoh wahi retrun krega 

console.log(newarr);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? REDUCE

let cart = [ 1 , 2 , 4 , 1 , -1 , 0 , 10, 6 ]

// const total = cart.reduce( function(acc , currentValue){
//     console.log(`acc: ${acc} & current: ${currentValue}`);
//     return acc + currentValue

// })
// console.log(total);

// const total = cart.reduce( function(acc , currentValue){
//     console.log(`acc: ${acc} & current: ${currentValue}`);
//     return acc + currentValue

// }, 0 )   // added initail value that is 0
// console.log(total);

//?initail value dena zarori hai 0


const total = cart.reduce( (acc, currentVal) => acc + currentVal , 0)
console.log(total);


















































 




