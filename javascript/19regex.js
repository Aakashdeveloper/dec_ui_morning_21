regular express
^$

// if pattern does not match it will return  null else array
var a = "hi"
a.match("^([a-z])$")
null

// it only look for single letter word in lowercase
var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]

// it only look for 2 letter word in lowercase
var a = "hi"
a.match("^([a-z]{2})$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]

// it only look for between 2 letter to 5 letter word in lowercase
var a = "hii"
a.match("^([a-z]{2,5})$")
(2) ['hii', 'hii', index: 0, input: 'hii', groups: undefined]

// it only look for any length in lowercase
var a = "hii"
a.match("^([a-z]{2,5})$")
['hii', 'hii', index: 0, input: 'hii', groups: undefined]

var a = "Hii"
a.match("^([A-Za-z]{2,5})$")
(2) ['Hii', 'Hii', index: 0, input: 'Hii', groups: undefined]

var a = "Hii0"
a.match("^([a-z0-9A-Z$]{2,5})$")
(2) ['Hii0', 'Hii0', index: 0, input: 'Hii0', groups: undefined]

var num = 7867677735
num.match("^[0-9]{10}$")
VM530:2 Uncaught TypeError: num.match is not a function

var num = 9876543125
num.toString().match("^[0-9]{10}$")
['9876543125', index: 0, input: '9876543125', groups: undefined]

var str = "this hat is hot haat"
str.match(/h.t/g)
(2) ['hat', 'hot']
str.match(/h..t/g)
['haat']

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null