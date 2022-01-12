var a = true;
var b = true;
undefined
a+b
2
var c = false
undefined
a+c
1


true is equal 1
false is equal 0

10+true
11
2*false
0

true+"true"
'truetrue'

true+"true"
'truetrue'
true-"true"
NaN

1+"10"
'110'

var a = "10"
parseInt(a)
10

var a = "10.11"
parseInt(a)
10
var b = "20"
parseInt(a)+parseInt(b)
30


var a = "10.11"
var b = "20.50"
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.61

//es6
Number(a)+Number(b)
30.61
var a = "10"
var b = "20"
Number(a)+Number(b)
30

var a = "hi"
undefined
parseFloat(a)
NaN
var a = true
undefined
parseInt(a)
NaN

var a = "delhi10"
var b = "10delhi"
var c = "10delhi20"

parseInt(a)
NaN
parseInt(b)
10
parseInt(c)
10

Number(a)
NaN
Number(b)
NaN
Number(c)
NaN

var a = 10
isNaN(a)
false

var a = "10"
isNaN(a)
false

var a = "Hi"
isNaN(a)
true