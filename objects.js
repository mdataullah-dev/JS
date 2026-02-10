
const tinderUser = new Object();

tinderUser.name = "Epstein"
tinderUser.age = 66
tinderUser.isdead = true

// console.log(Object.keys(tinderUser));//? sari keys ko array me dega
// console.log(Object.values(tinderUser)); //? sari values ko array me dega
// console.log(Object.entries(tinderUser)); //? sari key value pair ko array me dega

//! DESTRUCTURING of objects  [imp]


const course = {
    courseName : "JS",
    price : "$99",
    courseInstructor : "MD ATAULLAH MASOOD"
}

const {courseInstructor} = course  //! yahan pr humne kiya destructruring
console.log(courseInstructor);

const {price:p} = course
console.log(p);
































