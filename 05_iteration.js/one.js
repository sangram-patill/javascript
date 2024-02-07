// for(let index = 0; index <= 10; index++){
//     console.log(index);
// }

// const myArr = ['sangram','shubham','krushna','aditya']
// for(let index = 0; index<myArr.length; index++){
//     console.log(myArr[index]);
// }

// for(let index = 1; index <= 10; index++){
    
//     if(index == 5){
//         console.log('5 is detected')
//         break //break the flow of execution
//     } 
//         console.log(index);
// }

for(let index = 1; index <= 10; index++){
    if(index == 5){
        console.log('5 is detected')
        continue // 5 is not printed skip by continue keyword
    } 
    console.log(index); 
} 