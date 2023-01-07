//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=vB-aPrlSEXs

/*
• Criando e utilizando objetos simples: 00:00
• Adicionando novas propriedades: 03:33
• Deletando propriedades: 04:12
• Passando outros valores para objeto: 04:35
• Adicionando função: 07:20
• Forma mais curta de passar função: 09:20
• Passando variável como valor: 09:52
• Merge de objects com Object.assign: 12:19
• Merge de objects com operador spread: 16:05
• Passando variável como chave: 19:33
• Getters e Setters: 21:47
*/

var user={
    name:'Flavio',
    age:38,
    software:'Docthor',
    'last-name':'Viana'
}

console.log(user)
console.log(user.age)
console.log(user.name)
console.log(user.software)
console.log(user["last-name"])


user.year=2021;
console.log(user)
console.log(user.year)

delete user.age
console.log(user)


user.hobbies=['Música','Programar','Viajar']

console.log(user)

user.competencias={
    languages:['JavaScript', 'C#', 'PHP'],
    sport:['bike','run', 'swim']
}
console.log(user)

var user2={
    sayHi: function(name){
        return `Olá ${name}`
    }
}

console.log(user2)

console.log(user2.sayHi('Flavio'))
console.log(user2.sayHi('Cris'))

var cor='amarelo';

var user3 = {
    name:'Flavio',
    cor:cor
}

console.log(user3)

var color='azul'
var age=38
var name ='caio'

var user4 ={
    color,
    age,
    name
}

console.log('user4',user4)

var user5 = {
    name:'Flavio',
    age:38
}

var extraInfo={
    country:'Brasil',
    state: 'MG'
}

//primeiro parametro é objeto alvo {} gera objeto novo, os proximos parametros sao objeotos que quero juntar
//se eu não passar o primeiro parametro ele modifica o primeiro objeto
var newUser = Object.assign({}, user5, extraInfo)
console.log(newUser)

Object.assign(user5, extraInfo)
console.log(user5)

var user6 = {
    name:'Flavio',
    age:38
}

var newUser2={user6, extraInfo}

console.log(newUser2)

var newUser3={...user6, ...extraInfo}

console.log(newUser3)

var newVar='state';

var user7 = {
    name:'Flavio',
    [newVar]:'Minas Gerais'
}

console.log(user7)

//getters e setters

var users = [
    {
        name:'Flavio',
        age:38
    },
    {
        name:'Cris',
        age:37
    },
    {
        name:'Caio',
        age:1.7
    }
]

console.log(users[2].age)

var user ={
    set:0,
    get current(){
        return users[this.set]
    },
    set current(set){
        this.set = set
    },
    next(){
        ++this.set;
    },
    previous(){
        --this.set;
    }
}

console.log(user.current)
user.next();
console.log(user.current)
user.next();
console.log(user.current)
user.previous();
console.log(user.current)

user.current = 0;
console.log(user.current)
user.current = 2;
console.log(user.current)

var o ={}
Object.defineProperty(o, 'a', {})

console.log(o)