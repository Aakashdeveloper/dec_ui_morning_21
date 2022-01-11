= // assignment
== // compare the data
=== // compare the data and datatype

var a = 10
a
10

var b = "10"
a==b (compare the data)
true
a===b (compare the data and datatype)
false

var a = 20
var b = 20
a==b
true
a===b
true

var b = 21
a == b
false
a === b
false

var a = "John"
var b = 'john'

a == b
false
a === b
false

var a  = 1
var b = true
a == b
true
a === b
false

10 >5
true
10 < 5
false
10 !== 5
true
10 => 5
VM1875:1 Uncaught SyntaxError: Malformed arrow function parameter list
10 >=10
true
10 <= 10
true

///negation 
var a = true
!a
false

var a = false
!a
true

var a = 1
!a

var a = 1
!a
false

var b = 0
!b
true

var a = "Hi"
!a
false

var a = -1
!a
false

truthy > any number except 0 weather +ve or -ve all are true, strings, true
falsy > 0, false, null , undefined