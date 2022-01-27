//es5
//var myObj = require('./first');
//es6
import myObj from './first'

console.log(myObj.user)

console.log(myObj.dbQuery.insert('Student',{name:'John',city:'Keev'}))