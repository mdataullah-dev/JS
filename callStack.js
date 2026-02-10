//? how code execute --- 

//? execution context and call stack 

//*     ----javascript execution context----

// node js environment ka global execution context {}  hota hai jo [this] keyword mein ralh diya jata hai 
// browser ka global execution context => window hota hai jo [this] mein rakh diya jata hai

//? browser mein source mein jaa kr we can do codeing nromal like js and add debugger ponits and see call stack

// function one() {
//     console.log("1st")
//     two()
// }
// function two() {
//     console.log("2nd")
//     three()
// }
// function three() {
//     console.log("3rd");
// }
// one()
// two()
// three()

//? ye wali code run kro and see call stack 




//*-----------------------------------------------------
// !  control flow  || logic control

// ? how we control our code !!

//rules


if(true){
    //? ye to execute hoga
}

if(false){

//?  ye ye scope mein kuch v excuete nhi hoga js ignore karega isko 

}

const isUserLoggedIn = true
const debitcard = true
const name = false

if(isUserLoggedIn && debitcard){
    console.log("allow to purchase");  
}

if(isUserLoggedIn || name){
    console.log("not allow");  
}


//? switch - case 

//? truthy values  and falsy values 

//? truthy values :  [] , () , {} , "0" , 'false' string ke ander hai isliye vo truthy value hai , fynction(){}

//* falsy values :  false , 0 , -0 , BigInt 0n [zeron] , "" , null , undefined , NaN
//* => iske alawa sab truthy value hai 

//? for array empty checking :

const cart = new Array()
if(cart.length === 0){
    console.log("ARRAY is EMPTY");
}

//? for object empty checking :

const details = {}
if(Object.keys(details).length === 0){       //? yahan pr Object.keys(objectname)  => dalne se us details object ki sari keys ka array bn gya then us pr humne length laga diya 
    console.log("details OBJECT is empty");   
}


//? nullish coalescing operator (??)  -- null undefined pr work krta hai 

let val;

// val = 5 ?? 10   //? 5
val = null ?? 5   //? 5
val = 6 ?? undefined
console.log(val);


//! {{{{{  terniary Operator }}}}

//? condition ? true : false

//? condition likh do ? then true statement agar condition true hua toh kya hona chaiye :  ya agar false hua tih kya hona chaioye 
//*eg

const price = 100;

price >= 40  ?  console.log("greater than 40")  : console.log("less than 40");
price >= 120  ?  console.log("greater than 120")  : console.log("less than 120");




























