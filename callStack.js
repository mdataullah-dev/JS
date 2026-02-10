//? how code execute --- 

//? execution context and call stack 

//*     ----javascript execution context----

// node js environment ka global execution context {}  hota hai jo [this] keyword mein ralh diya jata hai 
// browser ka global execution context => window hota hai jo [this] mein rakh diya jata hai

//? browser mein source mein jaa kr we can do codeing nromal like js and add debugger ponits and see call stack

function one() {
    console.log("1st")
    two()
}
function two() {
    console.log("2nd")
    three()
}
function three() {
    console.log("3rd");
}
one()
two()
three()

//? ye wali code run kro and see call stack 
