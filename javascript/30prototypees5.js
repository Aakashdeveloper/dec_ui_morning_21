function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.age = 10;
    this.legs = 2;
}

var john = new human('John','Pune')

human.prototype = new robot()

var amit = new human('Amit','Pune')
amit
human {name: 'Amit', city: 'Pune'}
amit.legs
2
amit.age
10