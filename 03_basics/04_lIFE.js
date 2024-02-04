// Immediately Invoked Function Expression (IIFE)

//Used For => To avoid polluting the global namespace.

//Name IIFE
// (function chai(){ 
//     console.log('DB Connected..!');
// })(); //semi colon is compulsory to know the where is code ended.

// (()=>{
//     console.log('Database Connected with arrow function');
// })()

//Un-named IIFE
((name)=>{
    console.log(`DB connected ${name}`);
})('sangram') //Passing the parameter