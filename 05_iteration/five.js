const coding = ['JS','Ruby','Java','Python','CPP']

//forEach Loop
// coding.forEach((val)=>{
//     console.log(val);
// })

// coding.forEach(function (val){
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//Output => Same output for above three loop
// JS 
// Ruby
// Java
// Python
// CPP

// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
// })

//Output => 
// JS 0 [ 'JS', 'Ruby', 'Java', 'Python', 'CPP' ]
// Ruby 1 [ 'JS', 'Ruby', 'Java', 'Python', 'CPP' ]
// Java 2 [ 'JS', 'Ruby', 'Java', 'Python', 'CPP' ]
// Python 3 [ 'JS', 'Ruby', 'Java', 'Python', 'CPP' ]
// CPP 4 [ 'JS', 'Ruby', 'Java', 'Python', 'CPP' ]

const languageExtension = [
    {
        language : 'Java',
        extension : '.java'
    },
    {
        language : 'JS',
        extension : '.js'
    },
    {
        language : 'Python',
        extension : '.py'
    },
]

languageExtension.forEach((item)=>{
    console.log(item.language);
})

//Output => 
// Java
// JS
// Python