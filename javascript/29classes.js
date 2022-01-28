class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {
        return `Say Hi To ${this.name}`
    }
}

var french = new language1('French','France')
french
language1 {name: 'French', country: 'France', greet: ƒ}
french.greet()
'Say Hi To French'