// function add(){
//     let result = 10 + 20; //Can not access this variable outside the function
//     console.log(result);
// }
// add();

console.log(addone(5)) // addone functions allows to access before its declaration

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)); // But this function you cannot run before its declaration


