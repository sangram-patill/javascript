// let userName = ''; //if userName contain value then it is true otherwise empty string treated as false
// if(userName){
//     console.log('true');
// }else{
//     console.log('falsy');
// }

// let arr = []; //if arr contain value then it is true and empty arr is also a true
// if(arr){
//     console.log('true');
// }else{
//     console.log('falsy');
// }

//falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy
// true, "0", 'false', " ", [], {}, function(){}

//checking the object is empty or not
// let emptyObj = {};

// if(Object.keys(emptyObj).length===0){ //it create the array and check the array size
//     console.log('Object is empty');
// }

//false == 0 => true
//false == '' => true
//0 == '' => true


//Nullish Coalescing Operator (??) => null, undefined
// use the nullish coalescing assignment operator to apply default values to object properties.
let val;
// val = 5 ?? 10;
// console.log(val); //5
// val = null ?? 10;
// console.log(val); //10 This is mostly used in database to getting the reponsr properly
// val = null ?? 10 ?? 15;
// console.log(val); //10 => first value getting executed 

//Ternary Operator  
// condition ? true : false

const price = 80;
price <= 100 ? console.log('Less than hundread') : console.log('More than 100'); 