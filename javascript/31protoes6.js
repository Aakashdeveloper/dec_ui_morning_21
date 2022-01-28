class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.11;
    }
}


class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi To ${this.name}`
    }
}


var french = new language1('French','France')

console.log(french)

language1 {
    lat: 43.22,
    long: 32.11,
    greet: [Function: greet],
    name: 'French',
    country: 'France'
}