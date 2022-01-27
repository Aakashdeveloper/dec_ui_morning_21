/*let firstName = "Michal"
let lastName = "Peter";

let sayHi = {
    firstName:'Zoe',
    lastName:'Lisa',
    greet:()=>{
        return `Say Hi to ${firstName} ${lastName}`
    }
}

console.log(sayHi.greet())
// Say Hi to Michal Peter*/

let firstName = "Michal"
let lastName = "Peter";

let sayHi = {
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())
//Say Hi to Zoe Lisa