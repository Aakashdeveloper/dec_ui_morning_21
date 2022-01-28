function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = ( ) => { return `Say Hi To ${name}`}
}

var Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.name
'Hindi'
Hindi.country
'India'

var English = new language('English','US')
English
language {name: 'English', country: 'US', greet: ƒ}
English.greet()
'Say Hi To English'