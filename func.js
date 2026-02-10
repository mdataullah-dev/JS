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














                                  