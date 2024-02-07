//shallow cloning => share the same reference point  
//deep cloning => do not share the same reference instead copy is created

// const arr = [1,2,3,4,5] //first way of declaring the array
// console.log(arr[2]);
// let arr1 = new Array("Sangram" , 21,10.5) //another way of declaring the array
// console.log(arr1[1]);

/*************Array Method ************* */

// arr.push(50) //push the element at last
// console.log(arr);
// arr1.pop()
// console.log(arr1);

// const num = [20,30,40,50,60]
// console.log(num);
// num.unshift(10)   //add the value at first index
// console.log(num);
// num.shift(10)   //removes the value at first index
// console.log(num);
// console.log(num.indexOf(50)); //3
// console.log(num.indexOf(700)); // not present => -1
// console.log(num.includes(70)); // the item which is not exist it written the false

// const newArr = num.join(); // it convert array into string by comma separated  value 
// console.log(newArr); // 20,30,40,50,60
// console.log(typeof newArr); //string

/************slice and splice***************/

// const myArr = [1,2,3,4,5,6]
// console.log(myArr.slice(1,3)); //do not change the original array only slice the array first value = starting index and second value = mention how many element you want  //output => [ 2, 3 ]
// console.log(myArr); //output => [ 1, 2, 3, 4, 5, 6 ]

// console.log(myArr.splice(2,3)); // it change the original array. First value = starting index second value = from given index how many elements you need to splice 
// [ 3, 4, 5 ]
// console.log(myArr); // [ 1, 2, 6 ]