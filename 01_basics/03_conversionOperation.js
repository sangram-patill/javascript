//let score = 33

//console.log(typeof score)   //Method one to write the typeof
//console.log(typeof (score)) //Method two for writing the typeof 

// let str = "33"
// let valueInNumber = Number(str) //Converting the string to number. Method available => Number, String, Boolean
// console.log(valueInNumber)      // 33
// console.log(typeof valueInNumber);  //number

// let mixture = "33abc"
// let convertToNumber = Number(mixture)
// console.log(convertToNumber);  // Output => NaN - Not a Number
// console.log(typeof convertToNumber);  //type => number

// let value = null
// let convertToNumber = Number(value)
// console.log(convertToNumber);  // Output => 0
// console.log(typeof convertToNumber); //type => number

// let value = undefined
// let convertToNumber = Number(value)
// console.log(convertToNumber);  // Output => NaN
// console.log(typeof convertToNumber); //type => number

// let boolean = true
// let convertToNumber = Number(boolean)
// console.log(convertToNumber);  // Output => 1
// console.log(typeof convertToNumber); //type => number


//Note
//"33" = 33
//"33abc" = NaN
//true = 1 and false = 0


// let isLoggedIn = "sangram"      
// let convertToBool = Boolean(isLoggedIn)
// console.log(convertToBool); //0 => false, 1 => true, "" => false, "sangram" => true
// console.log(typeof convertToBool);


/****************************************************Operation****************************************************************/

// console.log("1" + 2); //Output => 12
// console.log(2 + "2" + 2 +2); // Output=> 2222 because when we add the string in middle or at start 
// console.log(2  + 2 +2 + "2"); // Output => 62 because when we add the string at last

console.log(+true) //Output => 1
console.log(+"") //Output => 0