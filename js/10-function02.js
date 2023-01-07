//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=sb_XEtwVsG0
/*
Introdução: 00:00
Operador new: 03:29
Método call: 06:18
Método apply: 08:34
Método bind: 10:24
Motivos para usar this: 13:37
Arrow functions: 14:32
Arrow functions sem return: 16:24
Arrow functions com 1 parâmetro: 20:05
Arrow functions e this: 21:21
*/

//this tras window, depende do escopo
//console.log(this)

function User(){
    this.name = 'Flavio'
    this.age = 38
    this.sum = function(a,b){
        return a+b;
    }
}

//console.log(new user())

var user = new User()
console.log(user)

console.log(user.name)
console.log(user.age)
console.log(user.sum(10,4))

//call

function Character(p1,p2,p3){
    console.log(p1,p2,p3)
    console.log('Persona this', this)
}

var characterThis = {name:'Flavio'}

Character.call(characterThis, 'param1', 123, [5])

//Apply
var characterParams=['param2', 321, [1,2,3]]
Character.apply(characterThis, characterParams) 

//bind

var char = Character.bind(characterThis, 'Olá', 'Mundo')
char('!!!')

// Arrow functions

var sum = (a,b)=>{
    return a+b;
}

console.log(sum(10,10))
//se a+b ficar na linha de baixo posso proteger com parenteses (a+b)
var sum2 = (a,b)=> a+b;
console.log(sum(12,14))
