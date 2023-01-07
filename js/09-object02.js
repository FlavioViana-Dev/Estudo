//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=7MG3O_-ZqGc

var newUser = {
    name:'Flavio',
    age:38,
    country:'Brasil'
}

/*var name = newUser.name
var country = newUser.country;

var {age} = newUser;*/

var {name, country, age} = newUser 

console.log(name)
console.log(country)
console.log(age)

var {name:firstName} = newUser;
console.log(firstName)

var newUser2 = {
    name:{
        first: 'Caio',
        last: 'Viana'
    }
}

var{name:{first}} = newUser2
console.log(first)
console.log(name)

var{name:{second = 'Fonseca'}} = newUser2
console.log(second)

function printUser({name, age, gender, country='Brasil'}){
    console.log(name)
    console.log(age)
    console.log(gender)
    console.log(country)
}

var functionUser = {
    name: 'Flavio',
    age: 38,
    gender: 'M'
}

printUser(functionUser)

console.log(Object.keys(functionUser))
console.log(Object.values(functionUser))

var props = Object.keys(functionUser)
console.log(props)

console.log('---')

for(var i=0; i<props.length; i++){
    console.log(props[i])
    console.log('usuario', functionUser[props[i]])
}

console.log('---')

for(var prop of props){
    console.log('usuario2', functionUser[prop] )
}

console.log('---')

for(var prop2 in functionUser){
    if(functionUser.hasOwnProperty(prop2)){
        console.log('prop2', functionUser[prop2] )
    }
}