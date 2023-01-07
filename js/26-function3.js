//https://www.youtube.com/watch?v=W3f6hiTLipc

//Function Declaration

function sayHello(){
    console.log('Hello!')
}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}`)
}

sayHelloTo('Caio')

function returnHi(){
    return 'Hi!'
}

const greeting = returnHi()

console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Cris'))


console.log('====================================')


// Anonymous function

// (function(a,b,c){
//     return a+b+c
// })(1,2,3);

// (function(a,b,c){
//     return a+b+c
// })(1,2,3);

//function expression
const sum = function(a,b){
    return a+b
}
const result = sum(7,8)
console.log(result)

console.log('====================================')

// function arrow

const increment1 = n => {return n+1}
const increment2 = n => n+1
const sum2 = (a,b) => a+b

console.log('====================================')

function defaultParams(a,b,c=0){
    console.log(a,b,c)
}

defaultParams(1)


console.log('====================================')

function array(...n){
    console.log(n)
}

range(1,23,4,435,)

console.log('=================DESAFIO===================')
//desafio
function range(a,b,c=1){
    let ini = !!b?a:1
    let fim = !!b?b:a
    let r = []
    if(fim>=ini){
        for(var i=ini; i<= fim; i++){
            if(!(i%c)){
                r.push(i)
            }
        }
    }
    else{
        for(var i=ini; i>= fim; i--){
            if(!(i%c)){
                r.push(i)
            }
        }
    }
    return r
}

console.log(range(5))
console.log(range(6,11))
console.log(range(10,19,2))
console.log(range(6,2))
console.log(range(8,-3,4))
