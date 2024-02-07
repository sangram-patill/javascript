//Reduce
 const myNum = [1,2,3]
 
//  const myTotal = myNum.reduce(function (acc, currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
//  },2)

//  console.log(myTotal);
//Output => 
// acc : 2 and currval : 1
// acc : 3 and currval : 2
// acc : 5 and currval : 3
// 8

const newNum = myNum.reduce((acc,currval)=>acc+currval,0)
console.log(newNum); //6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);