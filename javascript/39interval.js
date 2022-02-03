// interval > run some operator after certain intervals of time
// timeout > run  only once some operator after certain intervals of time

setInterval(function(){

},time)

var myinterval = setInterval(function(){
    console.log(Math.random())
},3000)

0.5336389894587383
VM568:2 0.31043245938239017
VM568:2 0.44227811268740735
VM568:2 0.8881265954660158
VM568:2 0.02773625659131751
VM568:2 0.9349248460834234
VM568:2 0.6185604883777087
VM568:2 0.10214095337703477

clearInterval(myinterval)

// timeout
setTimeout(function(){
    console.log(Math.random())
},3000)
0.9498320181526261