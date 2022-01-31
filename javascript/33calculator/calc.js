function calc(opt){
    let a = document.getElementById('first').value
    let b = document.getElementById('second').value
    let out;
    if(opt == 'add'){
        out = `Sum of number is  ${Number(a)+Number(b)}`
    }else{
        out = `Sub of number is  ${Number(a)-Number(b)}`
    }
    document.getElementById('output').innerText=out
}
/*function add(){
    let a = document.getElementById('first').value
    let b = document.getElementById('second').value
    let out = Number(a)+Number(b)
    document.getElementById('output').innerText=`Sum of number is ${out}`
}
function sub(){
    let a = document.getElementById('first').value
    let b = document.getElementById('second').value
    let out = a-b
    document.getElementById('output').innerText=`Sub of number is ${out}`
}*/