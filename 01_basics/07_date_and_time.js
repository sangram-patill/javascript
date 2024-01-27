/**********Default date and time ************* */

// let myDate = new Date() //this code is ran on 27-01-2024 time in between 18:45 to 19:30
// console.log(myDate.toDateString()); //Sat Jan 27 2024
// console.log(myDate.toISOString());  //2024-01-27T13:43:50.408Z
// console.log(myDate.toJSON());      //2024-01-27T13:43:50.408Z
// console.log(myDate.toLocaleDateString('mar-IN')); //२७/१/२०२४
// console.log(myDate.toLocaleDateString('en-IN'));  //27/1/2024
// console.log(myDate.toLocaleDateString()); //1/27/2024
// console.log(myDate.toLocaleString());  //1/27/2024, 7:13:50 PM
// console.log(myDate.toLocaleString('mar-IN')); //२७/१/२०२४, ७:१३:५० PM
// console.log(myDate.toLocaleString('en-IN')); //27/1/2024, 7:13:50 pm
// console.log(myDate.toLocaleTimeString()); //7:13:50 PM
// console.log(myDate.toLocaleTimeString('mar-in')); //७:१३:५० PM
// console.log(myDate.toLocaleTimeString('en-in')); //7:13:50 pm
// console.log(myDate.toString()); //Sat Jan 27 2024 19:19:22 GMT+0530 
// console.log(myDate.toTimeString()); //19:21:20 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()); //Sat, 27 Jan 2024 13:53:29 GMT
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getHours()); // 19
// console.log(typeof myDate); //object


/**********************created date and time*********************/

// let myCreatedDate = new Date(2023, 0, 26, 12, 5)
// console.log(myCreatedDate.toString()) //Thu Jan 26 2023 12:05:00 GMT+0000 (Coordinated Universal Time)

// let myCreatedDate = new Date("26-01-2024")
// console.log(myCreatedDate.toLocaleDateString()); //Invalid Date


let myCreatedDate = new Date("2-11-2024")
// console.log(myCreatedDate.toLocaleDateString()); //2/11/2024


/*******************Time***********/

// let myTimeStamp = Date.now() 
// console.log(myTimeStamp);  //current timestamp in milliseconds 
// console.log(myCreatedDate.getTime()); //converting date into time i.e. in seconds
//note : always use milisecond for conversion
// console.log(Math.floor(Date.now()/1000)); //converting into seconds

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.toLocaleDateString('default',{
    weekday:   "long",
    year : "2-digit",
}))