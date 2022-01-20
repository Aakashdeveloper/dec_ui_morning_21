// array is the collection of homogenious as well as hetrogenious data type
var a = [1,8,45,34,91]  >> array of numbers
var b = ["a","test","gg","fbf"] >> array of strings
var c = [true,false ,false,true] >> array of boolean

var d = [7,56,"hghg","hkh",7,true,"ykyky",false] >> array of hetrogenious
////////////////////////////////////////////////////////////////

var city = ["Delhi","Mumbai","Pune","Helsinki","London"]
undefined
city.length
5
city[0]
'Delhi'
city[1]
'Mumbai'
city[2]
'Pune'
city[city.length-1]
'London'

var city = ["Delhi","Mumbai","Pune","Helsinki","London"]
undefined
city.push("Amsterdam")
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam']
city.push("Venice")
7
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']

var city = ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.pop()
'Venice'
city
(6) ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam']
city.pop(3)
'Amsterdam'
city.pop(300000)
'London'

var city = ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.shift()
'Delhi'
city.unshift('Boston')
7
city
(7) ['Boston', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']


#push > add the value in the end of the array
#unshift > add the value in the beginning of the array
#pop > remove the last value of the array
#shift> remove the first value of array

var city = ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.slice(1)
(6) ['Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city.slice(2)
(5) ['Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city
(7) ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city.slice(2,5)
(3) ['Pune', 'Helsinki', 'London']
city.slice(-5,-1)
(4) ['Pune', 'Helsinki', 'London', 'Amsterdam']
city.slice(-1)
['Venice']
city.slice(0,-1)

city.splice(start,deletecount, value)

var city = ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.splice(2,1)
['Pune']
city
(6) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Venice']
city.splice(3,0,'Dubai','NewYork')
[]
city
(8) ['Delhi', 'Mumbai', 'Helsinki', 'Dubai', 'NewYork', 'London', 'Amsterdam', 'Venice']
city.splice(4,2,'Nice')
(2) ['NewYork', 'London']
city
(7) ['Delhi', 'Mumbai', 'Helsinki', 'Dubai', 'Nice', 'Amsterdam', 'Venice']

var city = ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.indexOf('Pune')
2
city.indexOf('Delhi')
0
city.indexOf('Dubai')
-1
city.indexOf('Nice')
-1

var a = ['a','b','c',1]
var b = [1,2,'d']
a+b
'a,b,c,11,2,d'
a.concat(b)
(7) ['a', 'b', 'c', 1, 1, 2, 'd']
typeof(a)
'object'
var c = "hii"
Array.isArray(a)
true
Array.isArray(c)
false

var city = ['Delhi', 'Mumbai', 'Pune', 'Helsinki', 'London', 'Amsterdam', 'Venice']
undefined
city.sort()
(7) ['Amsterdam', 'Delhi', 'Helsinki', 'London', 'Mumbai', 'Pune', 'Venice']
city.reverse()
(7) ['Venice', 'Pune', 'Mumbai', 'London', 'Helsinki', 'Delhi', 'Amsterdam']


var city = ['Delhi', 'Mumbai', ['red',['audi','bmw','merc'],'yellow','orange'], 'Amsterdam', 'Venice']
undefined
city[0]
'Delhi'
city[2]
(4) ['red', Array(3), 'yellow', 'orange']
city[2][0]
'red'
city[2][1]
(3) ['audi', 'bmw', 'merc']
city[2][1][0]
'audi'
city[2][1][1]
'bmw'
city[2][2]
'yellow'
city.flat()
(8) ['Delhi', 'Mumbai', 'red', Array(3), 'yellow', 'orange', 'Amsterdam', 'Venice']
city.flat(2)
(10) ['Delhi', 'Mumbai', 'red', 'audi', 'bmw', 'merc', 'yellow', 'orange', 'Amsterdam', 'Venice']