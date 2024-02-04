const user = {
    username : 'Sangram',
    email : 'sangram@gmail.com',
    welcomeMsg : function (){
        console.log(`${this.username}, Welcome to Dashboard`); // this refer the current context
    }
}

// user.welcomeMsg(); //Sangram, Welcome to Dashboard
// user.username = 'Ram';
// user.welcomeMsg(); //Ram, Welcome to Dashboard

// console.log(this); //Output => {} When you run this on console then you will get the many prototype

// function KnowAboutThis(){
//     // console.log(this); // this will print all the 'this' keyword properties
//     let username = 'Sangram';
//     console.log(this.username); //undefined, you can't use this keyword in function
// }
// KnowAboutThis();


// const one = function (){
//     let name = 'Sangram';
//     console.log(this.name); //undefined, you can't use this keyword in function
// }
// one()

//****Arrow Functions */

// const one =  ()=> {
//     console.log(this); //{}
//     let name = 'Sangram';
//     console.log(this.name); //undefined, you can't use this keyword in function
// }
// one()


// const add = (num1,num2)=>{
//     return num1 + num2;
// }

// console.log(add(10,11)); //21

//Implicit return 
const add = (num1,num2)=> num1 + num2; //This expression is called implicit expression. It has only work with one expression
console.log(add(10,10)); //20

//Another type of implicit function 

// const addTwo = (num1,num2)=> {return num1 + num2} // when we declare the implicit return in curly braces then use the return keyword
// console.log(addTwo(90,10)); //100 


//dealing with object

const test = ()=> ({username : 'sangram'});
console.log(test()); //{ username: 'sangram' }






