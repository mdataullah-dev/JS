// !          FUNCTIONs

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please Enter a Username");   
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())   //? gives //Please Enter a Username
                                  //? undefined just logged in

function loginUserMessage(username = "John"){   //* aisa krne se username hamesha ke liye john fixed ho gya ab user kuch de na de use john ayegag
    if(!username){
        console.log("Please Enter a Username");
        return   
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Nazish"))   









                                  