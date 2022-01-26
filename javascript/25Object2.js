var calc = {
    sum: function(a,b){return a+b},
    sub: function(a,b){return a-b}
}
calc.sum(3,5)
8
calc.sub(3,5)
-2

var dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name},${data.city})`}
}

dbQuery.find('students')
'Select * from students'
dbQuery.insert('Student',{name:'John',city:'Keev'})
'insert into Student name,city values(John,Keev)'