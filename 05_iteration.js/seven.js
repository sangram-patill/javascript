const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const data = myNumbers.map((num)=> num * 10)
// console.log(data); //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

//Chaining
const newNum = myNumbers
                        .map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)

console.log(newNum); //[ 41, 51, 61, 71, 81, 91, 101 ]