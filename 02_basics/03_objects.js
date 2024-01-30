//object literal

const mySymbol = Symbol("key1"); // defining the symbol

const user={
    name : 'SANGRAM', //here key is treated as string by default
    [mySymbol] : 'myKey1', //symbol use
    email : 'sangram@gmail.com',
    isLogIn : true,
    lastLogIn : ['Monday', 'Friday']
}

//accessing the object
// console.log(user.name); //Not a good practice
// console.log(user["email"]); //good way to access the object value
// console.log(user[mySymbol]); //myKey1

// Object.freeze(user); //you cannot make changes in user 

user.greeting = function(){
    console.log('Hello greeting of the day..!');
}

console.log(user.greeting()); //Hello greeting of the day..!

user.greetingWithName = function() {
    console.log(`Hello ${this.name} Welcome to Dashboard..!`); 
}

console.log(user.greetingWithName()); //Hello SANGRAM Welcome to Dashboard..!
console.log(user);
// Output => 
//  {
//     name: 'SANGRAM',
//     email: 'sangram@gmail.com',
//     isLogIn: true,
//     lastLogIn: [ 'Monday', 'Friday' ],
//     greeting: [Function (anonymous)],
//     greetingWithName: [Function (anonymous)],
//     [Symbol(key1)]: 'myKey1'
//   }