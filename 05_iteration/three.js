//Higher order array loops

//for of => Used with array, array of object

// const arr = [10,20,30,40,50]
 
// for (const iterator of arr) {
//     console.log(iterator); // 10 20 30 40 50
// }

// const greeting = "Good Morning"
// for(const greet of greeting){
//     console.log(greet); // G o o d M o r n i n g
// }

//Maps => The map object holds key-pairs and remembers the original insertion order of the keys. Map is not iterable

const map = new Map();
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')
// console.log(map);
//Output =>
// Map(3) {
// 'IN' => 'India',
// 'USA' => 'United States of America',
// 'FR' => 'France'
// }

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }
//Output => 
// IN :- India
// USA :- United States of America
// FR :- France

for (const key in map) {
    console.log(key); // no output map is not iterable
}