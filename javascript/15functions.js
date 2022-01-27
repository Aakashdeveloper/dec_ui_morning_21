function
method
Arrow function
IFFI
Generator function
///////////////
var a = 10
var b = 20
a+b
30
//////////
keyword nameoffunction(parameter){
    return
}


function add(a,b){
    return a+b
}

add(1,2)
3

a == 1
b == 2

function add(a,b){
    return a+b
}
undefined
add(1)
NaN


function isEven(UserInput){
    var out;
    if(UserInput%2==0){
        out = `Number ${UserInput} is even`
    }else{
        out = `Number ${UserInput} is odd`
    }
    return out
}
isEven(5)
'Number 5 is odd'
isEven(4)
'Number 4 is even'

//method/////
var add = function(a,b){
    return a+b
}

add(1,2)
3

///es6Arrow
let add = (a,b) => {
    return a+b
}
add(1,2)
3

///////REST?//////
function add(...args){
    console.log(args)
}

add(1,2,3,4)
 [1, 2, 3, 4]


function add(...args){
    let out = 0;
    for(data of args){
        out +=data
    }
    return out
}

add(1,2,3,4)
10