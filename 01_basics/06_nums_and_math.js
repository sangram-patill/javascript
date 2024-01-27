// const balance = new Number(100)
// console.log(balance);  // Outut : [Number: 100]

// console.log(balance.toString()); // Converting into String
// console.log(balance.toFixed(2)); // Output => 100.00

// const number = 124.567
// console.log(number.toPrecision(4)); //Output => 124.6
// console.log(number.toPrecision(5));  //Output => 124.57

/**++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++++++++++++ */

// const amount = 100000
// console.log(amount.toLocaleString('mar-IN')); // output => in marathi format
// console.log(amount.toLocaleString('en-IN')); // output => in english india format


// console.log(Math.abs(-4)); // It covert negative to positive but not positive to negative
// console.log(Math.round(25.4)); //round the value >0.4 => Actual value || <=0.5 next value
// console.log(Math.ceil(4.2)); //next value i.e. 5
// console.log(Math.floor(4.7)); //previous value i.e. 4
// console.log(Math.min(4,5,7,63,2,3,)) //minimum value 
// console.log(Math.max(4,5,7,63,2,3,)) //maximum value 

console.log(Math.floor(Math.random()*10)); //random number sart from 0
console.log(Math.floor(Math.random()*10) + 1); //random number start from 1

const min = 50
const max = 70
console.log(Math.floor(Math.random()*(max-min + 1)) + min); // print value between 50 to 70
