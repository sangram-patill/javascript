// function add(num1,num2)//parameters
// { 
//     console.log(num1 + num2); // 30
// }

function add(num1,num2){ 
    let result = num1+num2;
    return result
    //console.log("This line is not execute beacause any code after return keyword not executed")
    //return num1+num2 //another way to write the return
}

// let result = add(10,20);
// console.log(result);

// function loginUserMessage(username){ //""=> empty string and undefined treated as false
//     if(!username.trim()){
//         console.log('Please enter username');
//         return
//     }
//     return `${username} just logged in`
// }

// let message = loginUserMessage('Ram')
// console.log(message);

// function calculateCardPrice(...num1){
//     return num1
// }

// console.log(calculateCardPrice(200,400,200)) // [ 200, 400, 200 ]

// function calculateCardPrice(val1,val2,...num1){
//     return num1
// }

//console.log(calculateCardPrice(10,50,20,40)) //[ 20, 40 ]

//accessing value from obj using function
const user = {
    id : 101,
    username : 'Sangram'
}

function welcomeStatement(obj){
    console.log(`Welcome, your id : ${obj.id} and username : ${obj.username}`)
}

welcomeStatement(user) //Welcome, your id : 101 and username : Sangram

const arr  = [40,20,60,10,50]

function arrValue(getArray){
    console.log(getArray[1]); //20
}

arrValue(arr) 