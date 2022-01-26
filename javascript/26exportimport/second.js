//es5
var myObj = require('./first');

console.log(myObj.user)

console.log(myObj.dbQuery.insert('Student',{name:'John',city:'Keev'}))