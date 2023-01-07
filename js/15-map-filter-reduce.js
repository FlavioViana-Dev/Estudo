//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=D_MExaVe95w
/*
- Começo: 00:00
- Introdução ao map: 01:19
- Exemplo com for: 01:30
- Refatorando para map: 02:50
- Map + arrow function + retorno imediato: 05:35
- 2º exemplo map: 07:01
- Introdução ao filter: 08:26
- Exemplo com for: 09:21
- Refatorando para filter: 11:00
- Map e filter juntos: 12:52
- Introdução ao reduce: 13:55
- Exemplo com for: 14:42
- Refatorando para reduce: 16:06
- 2º exemplo reduce: agrupamento: 20:02
- Conclusão: 27:54
*/

//MAP

const numbers = [2,3,6,5,10]
let newArrayNumbers=[]
for(let i=0;i<numbers.length;i++){
    newArrayNumbers.push(numbers[i]*2)
}

console.log(numbers)
console.log(newArrayNumbers)

const newArrayMap = numbers.map(function(number){
    return number*2
})

console.log('novoarrayMap', newArrayMap)

//arrow function retorno imediato
const arrayMapArrow = numbers.map(number=>number*2)
console.log(arrayMapArrow)

const names = ['Flávio', 'Cris', 'Caio']
const tinyNames = names.map(name=>name.toLowerCase())

console.log(names)
console.log(tinyNames)

console.log('-------------------')

//FILTER

let multiple2 = []

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2===0){
        multiple2.push(numbers[i])
    }
}
console.log(multiple2)

const filterNumbers = numbers.filter(function(number){
    if(number%2===0){
        return true
    }
    else{
        return false
    }
})

console.log(filterNumbers)

const filterNumbersArrow = numbers.filter(number=>{
    //return number%2===0?true:false
    return number%2===0
})

console.log(filterNumbersArrow)


console.log('filter object')

var users=[{
        id:1,
        name:'Flavio',
        age:38,
        software:'Docthor',
        'last-name':'Viana'
    },{
        id:2,
        name:'Cris',
        age:38,
        software:'Docthor',
        'last-name':'Fonseca'
    }]

const userFilter =  users.filter(u=>u.id==2)
console.log(userFilter)

console.log('-------------------')
//combinar map e filter

const arrayMapFilter =  numbers
    .filter(number=>number%2===0)
    .map(number=>number*2)

console.log(arrayMapFilter)

console.log('-------------------')
//REDUCE

let sum = 0
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(sum)
//primeiro é funcao, o segundo valor inicial
const sumReduce = numbers.reduce(function(accumulator, arrayValue){
    return accumulator + arrayValue
}, 0)

console.log(sumReduce)

const sumReduce2 = numbers.reduce((accumulator, arrayValue)=>
    accumulator + arrayValue, 0)

console.log(sumReduce2)

const people=[
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
        age:2
    }
]

const group = people.reduce(function(accumulator, arrayValue){
    const propLegalAgeOrMinor = arrayValue.age>=
        18?'legalAge':'minor'
    accumulator[propLegalAgeOrMinor].push(arrayValue)

    return accumulator
},{legalAge:[], minor:[]})

console.log(group)