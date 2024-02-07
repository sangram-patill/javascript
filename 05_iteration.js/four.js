//object iteration
//Note : For object iteration use for in loop
//for array iteration use for of loop and for loop
const language = {
    js : 'javascript',
    rb : 'ruby',
    swift : 'swift by apple'
}

//for in loop
// for (const key in language) {
//    console.log(`Full form for ${key} is ${language[key]}`);
// }
//Output => 
// Full form for js is javascript
// Full form for rb is ruby
// Full form for swift is swift by apple

const arr = ['Js','Java','DSA','Node js']
for (const key in arr) {
    console.log(arr[key]);
}
//Output=>
// Js
// Java
// DSA
// Node js