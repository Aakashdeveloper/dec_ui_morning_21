var name = "Avenger"
var rating = 4.5
var ind = "Hollywood"

var name1 = "Jab We Met"
var rating1 = 4.8
var ind1 = "Bollywood"

var movie = {
    name:"Avenger",
    rating:4.5,
    ind:"Hollywood"
}

movie
{name: 'Avenger', rating: 4.5, ind: 'Hollywood'}
movie.name
'Avenger'
movie.rating
4.5
movie.ind
'Hollywood'
movie.rating = 4.9
4.9
movie
{name: 'Avenger', rating: 4.9, ind: 'Hollywood'}
movie.type="Action"
'Action'
movie
{name: 'Avenger', rating: 4.9, ind: 'Hollywood', type: 'Action'}
delete movie.ind
true
movie
{name: 'Avenger', rating: 4.9, type: 'Action'}

var movie = {
    name:"Avenger",
    rating:4.5,
    ind:"Hollywood"
}

undefined
movie['name']
'Avenger'


var movie = [
    {
        name:"Avenger",
        rating:4.5,
        ind:"Hollywood"
    },
    {
        name:"Jab We Met",
        rating:4.8,
        ind:"Bollywood"
    }
]

movie[0].name
'Avenger'

var movie = {
    name:"Avenger",
    rating:4.5,
    ind:"Hollywood"
}

for(key in movie){
    console.log(key)
}

name
rating
ind

for(key in movie){
    console.log(movie[key])
}

Avenger
4.5
Hollywood