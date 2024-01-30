//singleton object => Another way to create the object
const tinderUser = new Object();
// console.log(typeof tinderUser); //object

tinderUser.id = 1233;
tinderUser.name = 'SANGRAM';
tinderUser.isLoggedIn = false;

// console.log(tinderUser); //{ id: 1233, name: 'SANGRAM', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ 1233, 'SANGRAM', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', 1233 ], [ 'name', 'SANGRAM' ], [ 'isLoggedIn', false ] ] It create the array of key and value
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

const regularUser = {
    email : 'sangram@gmail.com',
    fullName : {
        firstName : 'SANGRAM',
        lastName : 'PATIL'
    }
}

// console.log(regularUser.fullName.firstName); // SANGRAM

// const obj1 = {1 : 'a', 2 : 'b'}
// const obj2 = {3 : 'c', 4 : 'd'}
// const obj3 = {5 : 'e', 6 : 'f'}
// const mergeArr = Object.assign({},obj1,obj2,obj3); // {} =>it is not compulsory to use but it is a good practice. It will store all obj in empty array otherwise first obj it use to add all element into that
// console.log(mergeArr);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const all = {...obj1,...obj2,...obj3}; //merge using spread operator
// console.log(all); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//Array of object
const users =[
    {
        id : 1,
        name : 'SANGRAM'
    },
    {
        id : 2,
        name : 'RAM'
    }
]

// console.log(users[1].name); //RAM

//object de-structure

const course = {
    courseName : "JS",
    Price : 0,
    courseInstructor : 'Hitesh'
}

const {courseInstructor} = course; //instead of writting course.courseInstructor you can declare the above syntax and use as many times you wont
const {courseInstructor : teacher} = course;
console.log(courseInstructor);  //Hitesh
console.log(teacher); //Hitesh