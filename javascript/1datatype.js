//es5
//es6
ecma script

Datatypes

String = "Hii" 'hey' `Hello` "23hjuh"  'true'
Number = 76 8776767 767.8768 .88767 
Boolean = true false

//es5
var a = "Hiii"
var b = 10
var c = true

typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'

var d = '10'
typeof(d)
'string'

var e = `true`
typeof(e)
'string'

var f = 877.766
typeof(f)
'number'

var a = 20
var b = 10

a+b
30
a-b
10
b-a
-10
a*b
200
a/b
2
a%b
0
4%2
0
4%3
1
5%3
2

2%4
2
3%4
3
4%4
0

var a = "Hii"
var b = "JavaScript"
a+b (concat)
'HiiJavaScript'
a-b
NaN (not a number)
a*b
NaN
a/b
NaN

var a = "Hi"
var b = 10
a+b
'Hi10'

var c = true
a+c
'Hitrue'

string + string = string
string + number = string
number + string = string
number + number = number

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+'30'
'3030'

"10"+20+30
"1020"+30
'102030'

10+"20"+30-1
"102030"-1
102029

10+20+"30"-1
3029

"10"+20+30-1
102029

"hi"-1
NaN

"10"-"a"
NaN
"10"-"1"
9
"20"*"2"
40
"20a"*"2"
NaN
"20"*"2a"
NaN
1+"10"
'110'
1-"10"
-9
4*"10"
40
4*"10a"
NaN


if both the side of operator you have pure number 
except +(concat) all operation will work