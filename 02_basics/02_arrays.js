const oddNum = [1,3,5,7,9];
const evenNum = [2,4,6,8,10];
const num = [10,20,30,40,50];

// oddNum.push(evenNum); // work on existing array or modify existing array
// console.log(oddNum); //[ 1, 3, 5, 7, 9, [ 2, 4, 6, 8, 10 ] ]
// console.log(oddNum[5][0]); //2

// const allNum = oddNum.concat(evenNum);//concat requires new array to concat the both array into that and it works on only two arrays
// console.log(allNum); //[ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ]
// console.log(allNum[5]);//2

// const all = [...oddNum, ...evenNum, ...num]; //Spread operator =>  more than two or more array it merge into one single array
// console.log(all);//[ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 10, 20, 30, 40, 50 ]

// const arr = [1,2,[3,4],5,[6,[7,8],9]]
// console.log(arr.flat(Infinity)); //where Infinity you can write at what depth you want the sorted array
//Output => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 

// console.log(Array.from("Sangram")); //[ "S", "a", "n", "g", "r", "a", "m" ] it convert my string into array
// console.log(Array.isArray([10,20,30])); //true

// console.log(Array.from({name:"Sangram"})); // output => [] not work with key pair values
