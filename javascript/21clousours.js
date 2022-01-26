// local scope
// global scope
// enclose something

/*
var a = 10
function add(){
    var b = 20
    return a+b
}

console.log("add>>>",add())
console.log("a>>>",a)
console.log("b>>>",b)

add>>> 30
a>>> 10
/Users/aakash/Desktop/api/Dec/dec_ui_mrng/javascript/21clousours.js:13
console.log("b>>>",b)
                   ^
*/

// var a = 10
// var b;
// function add(){
//     b = 20
//     return a+b
// }

// console.log("add>>>",add())
// console.log("a>>>",a)
// console.log("b>>>",b)


var a = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log("a>>>",a)
console.log("b>>>",b)