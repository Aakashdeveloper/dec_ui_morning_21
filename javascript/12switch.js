// ifelse > multiple condition and multiple output
// ternary > single condition and single output
// switch > single condition and multiple output

let name = "Arun"

switch(name){
    case "Aakash":
        console.log(`Hi ${name} 1`)
        break;
    case 'Bhumika':
        console.log(`Hi ${name} 2`)
        break;
    case 'Arun':
        console.log(`Hi ${name} 3`)
        break;
    default:
        console.log(`Hi Unknown 3`)
}

Hi Arun 3

let a = 2

switch(a%2){
    case 0:
        console.log(`Number ${a} is even`)
        break;
    case 1:
        console.log(`Number ${a} is odd`)
        break;
    default:
        console.log(`Hi Unknown 3`)
}

Number 2 is even