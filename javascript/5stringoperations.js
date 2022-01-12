var city = "lONDon"
city.toLowerCase()
'london'
city.toUpperCase()
'LONDON'
city.length
6
city[0]
'l'
city[1]
'O'
city[city.length-1]
'n'

var name = "  Nikita "
name.trim()
'Nikita'
var name = "  Nikita . "
name.trim()
'Nikita .'

var a = "john"
var b = "John"
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amsTErdAm"
undefined
(Amsterdam)
city.charAt(0)
'a'
city.charAt(5)
'r'
city.charAt(-1)
''
city[-1]
undefined
city.at(0)
'a'
city.at(5)
'r'
city.at(-1)
'm'
city.at(-2)
'A'


var city = "amsTErdAm"
city.slice(1)
'msTErdAm'
city.slice(2)
'sTErdAm'

city.slice(2,5)
'sTE'
city.slice(3,7)
'TErd'
city.slice(3,15)
'TErdAm'

city.slice(-1)
'm'
city.slice(-2)
'Am'
city.slice(0,-2)
'amsTErd'
city.slice(0,-1)
'amsTErdA'
city.slice(-2,-5)
''
city.slice(-5,-2)
'Erd'
city.slice(1,-2)
'msTErd'
city.slice(-2,1)
''
city.slice(-2,0)
''

var city = "amsTErdAm"
city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'

city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRIs"
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "i am learning javascript"
a.replace('javascript','JS')
'i am learning JS'

var a = "javascript i am learning javascript"
a.replace('javascript','JS')
'JS i am learning javascript'

var a = "Javascript i am learning jAvascript"
a.toLowerCase().replace('javascript','JS')
'JS i am learning javascript'
a.toLowerCase().replace(/javascript/g,'JS')
'JS i am learning JS'


var a = "9876543342"
var b = "******3342"
var c = a.slice(0,6)
'*****'+a.replace(c,'*')
'******3342'

var name = "  Nikita . "
undefined
name.replace(/ /g,'')
'Nikita.'
name.replace(/ /g,'-')
'--Nikita-.-'

var url = "https://github.com/Aakashdeveloper/dec_node_mrng_21"
undefined
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'dec_node_mrng_21']0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "dec_node_mrng_21"length: 5[[Prototype]]: Array(0)
url.split('/')[4]
'dec_node_mrng_21'

var url = "https://github.com/Aakashdeveloper/dec_node_mrng_21"
var a = url.split('/')
a[a.length-1]
'dec_node_mrng_21'

var a = "Javascript i am learning jAvascript"
undefined
a.split(' ')
(5) ['Javascript', 'i', 'am', 'learning', 'jAvascript']

var a = "Javascript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,s,c,r,i,p,t'
a.toString().replace(/,/g,'')
'Javascript'

var a = 10
a.toString()
'10'
""+a
'10'