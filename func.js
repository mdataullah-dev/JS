// !          FUNCTIONs

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please Enter a Username");   
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())   //? gives //Please Enter a Username
                                  //? undefined just logged in

//! function loginUserMessage(username = "John"){   //* aisa krne se username hamesha ke liye john fixed ho gya ab user kuch de na de use john ayegag
// !    if(!username){
// !        console.log("Please Enter a Username");
// !        return   
// !    }
// !    return `${username} just logged in`
//! }
// !console.log(loginUserMessage("Nazish"))   

//********************************************************************/

//? E-commerce website 

// function calculateall(...allnums){  //? rest opertor which will bind all elements in array form
//     return allnums
// }
// console.log(calculateall(200,300,400))

//????????????????????????



//! SCOPING

//? {} = scope 
//* scope level //? mini hoisting


//!hoisting 
console.log(addone(5))    // function ke declartion se pehle v hum usko acces kr paa rahe due to hoisting
function addone(num){    //? function ko likhne ka treeka 
    return num + 1;
}
//console.log(addone(5))



//!=============================
//addtwo(10)   //? ye error dega => cause declare baad mein hai 
const addtwo = function(num){   //? function ko aise v bana skte hain kisi varaible mein daal kr 
    return num + 2;
}
console.log(addtwo(10))  // yahan pr agar is tarah se function ko varaible ke ander declare karengein toh uske declaration ke baad hi hum kr skte acces ya call us function ko

//================================//


//! ARROW Functions    

//? this keyword => current context ko refer krta hai

//? insdie browser if we do console.log(this) => then we get window , that means in browser the current context is window ..uska current global object
//* if do inside vs code console.log(this) => we get {} empty object kyuki uska current context kuch nhi hai 

const user = {
    username : "MD ATAULLAH",
    age : 20,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "MISBAH"
// user.welcomeMessage()
// console.log(this)


//? arrow func

// const run = () => {
//     console.log(this)
// }
// run()

// const res = (a,b) => {    //? curly braces mein wrap kroge toh retrun jeyword dena padega
//     return a-b;
// }
// console.log(res(-100,-100))

//? implicit return

const res = (a,b) => a-b;    // ? ek hi line mein v kr skte
console.log(res(-100,-100))

//? const res = (a,b) => (a-b); parenthesis mein wrap kara toh return keyword nhi chaiye   

//? object ko return krne ke liye hamein () paranethesis ke ander hi dalna padta hai
const oj = () => ({name:"nazish"})
console.log(oj())














                                  