if(condition){
    //do something 
}else{
    //do something
}

let a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

let name = "Bhumika"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are unknown`)
}

Hi Bhumika you are super admin


let name = "Bhumika"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}
if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}

/////////////
let name = "Aakash"
let role = "User"

if(role == "Admin"){
    if(name == "Nikita"){

    }else{

    }
}else if(role == "User"){
    if(name == "Nikita"){

    }else{

    }
}else{

}

//////////
let name = "Aakash"; 
let role = "Admin"
if(name == "Tina" || role == "Admin"){
    console.log(`Hi Your Welcome`)
}else{
    console.log(`Hi Your not allowed`)
}
Hi Your Welcome

let name = "Aakash"; 
let role = "Admin"
if(name == "Tina" && role == "Admin"){
    console.log(`Hi Your Welcome`)
}else{
    console.log(`Hi Your not allowed`)
}


let a = 1
if(a){
    console.log(`Hi`)
}else{
    console.log(`Bie`)
}
Hi

let a = 0
if(a){
    console.log(`Hi`)
}else{
    console.log(`Bie`)
}
Bie

let a = -1
if(a){
    console.log(`Hi`)
}else{
    console.log(`Bie`)
}
Hii

//// Ternary Operators
(single line ifelse)

condition ? "if condition true": "if condition false"

let a = 20
a>20?"Hii":"Bie"

let a = 20
a>20?"Hii":"Bie"
'Bie'
let a = 20
a<20?"Hii":"Bie"
'Bie'
let a = 20
a==20?"Hii":"Bie"
'Hii'

let a = 20
a<20?a+1:a-1
19

let a = 20
a==20?a+1:a-1
21