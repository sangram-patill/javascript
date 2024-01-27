// Primitive datatype => copy of datatype
// 7 types => String,Number,Symbol,Boolean,Bigint,null,undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id)  //Output => Symbol(123)
// console.log(anotherId); //Output => Symbol(123)
// console.log(id === anotherId); //Output => false


//Non-primitive datatype => reference of datatype
//Array, Object, Functions

// const arr = ['apple','orange','banana']
// console.log(arr);
// let name = {
//     fName : "Sangram",
//     lName : "Patil"
// }
// console.log(name)

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);    // Output => function

/**************************************Stack and Heap Memory******************************************/

//Stack => All primitive datatype use stack memory
//Heap => All non-primitive datatype use heap memory
