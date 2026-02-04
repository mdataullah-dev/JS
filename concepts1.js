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


//? STRING


//




