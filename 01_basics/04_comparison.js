// console.log("2" > 1); //It automatically covert string to number
// console.log("02" > 1);

// console.log(null > 0); //(1) => false
// console.log(null == 0) //(2) => false
// console.log(null >= 0) // (3) => true //equality check == and comparison < <= > >= work differently
                       //comparison convert null to number, treating as 0. i.e. (3) null >= 0 is true and (1) null > 0 is false.

// console.log(undefined == 0)  //All 3 result will be false
// console.log(undefined >= 0);
// console.log(undefined > 0);                      

                      
console.log("2" == 2) // == it checks only the value
console.log("2" === 23) // === it checks only the value as well as datatype