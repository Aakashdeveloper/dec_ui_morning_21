var input = [1,2,3,4]

function add(a,b,c,d){
    return a+b+c+d
}

add(input)
'1,2,3,4undefinedundefinedundefined'
add(...input)
10


var input = [1,2,3,4]
var city = ["Delhi","Mumbai","Pune"]
undefined
var city = ["Delhi","Mumbai",...input,"Pune"]
undefined
city
(7) ['Delhi', 'Mumbai', 1, 2, 3, 4, 'Pune']



function add(...args){ // Rest
    let out = 0;
    for(data of args){
        out +=data
    }
    return out
}

var input = [1,2,3,4]
add(...input) // Spread