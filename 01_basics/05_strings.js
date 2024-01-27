//String interpolation => 

// const fName = "Sangram"
// const lName = "Patil"

// console.log(`Welcome, ${fName.toUpperCase()} ${lName}`)

// const str = new String("Hello") // Another way to declare a string
// console.log(str)
//Output => key-value pair 
// String {'Hello'}
// 0: "H" 
// 1: "e"
// 2: "l"
// 3: "l"
// 4: "o"
// length: 5

/********String Method**************/
// const country = new String("India")
// console.log(country) //Print the string
// console.log(country.toLowerCase()); //Convert the string into lower case
// console.log(country.toUpperCase()); //Convert the string into upper case
// console.log(country.charAt(1)); // character at position 1 => n
// console.log(country.indexOf('i')); // character at position 1 => n
// console.log(country.substring(0,3)); //Divides the string as per requirements
// console.log(country.slice(-4,3)); //negative number is allowed

/************More string method****************/
const firstName = "         Sangram"
console.log(firstName.trim());

const url = "sangram%20patil.com"
console.log(url.replace("%20","-")); //it will replace the mention character/string in given string
console.log(url.includes("sangram")) // if string is found written true else false
console.log(url.split('%20')); //split the string depending on value to be given and the result will be written in array 

