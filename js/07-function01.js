//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=sb_XEtwVsG0
/*
Índice:
• Function básico: 00:46
• Parâmetros: 03:18
• Retorno de valor: 04:43
• Passando array como parâmetro: 06:48
• Parâmetro rest: 10:22
• Função auto invocável: 13:33
• Função anônima: 16:28
• Callback: 17:52
• Valores default: 24:46
*/

function write(){
    console.log('Olá, Docthor!\n')
}

write()
write()
console.log('Teste')
write()
write()

function writemessage(message){
    console.log(message)
}
writemessage('Hello World!')
writemessage('Flavio Augusto Viana')

function sum(a,b){
    return a+b
}
var result = sum(10,20)
console.log(result)
console.log(sum(10,20))

function sumItAllUp(numbers){
    var total=0
    for(var num of numbers){
        total += num
    }
    return total
}
var numbers = [3,5,7,10,9,12]
var result = sumItAllUp(numbers)
console.log(result)

function writeAddress(street, city, country, ...more){
    console.log(street)
    console.log(city)
    console.log(country)

    console.log(more)
}

writeAddress('R Babaçu', 'Águas Claras', 'Brasil', 'Cep 71928000', 'Bloco A');

(function autoExec(name){
    console.log('executei', name)
}('Flávio'))

var deductNumbers = function deduct(a,b){
    return a-b
}
var result = deductNumbers(10,20)
console.log(result)

var deductNumbers2 = function (a,b){
    return a-b
}

console.log(deductNumbers2(30,20))

function sumCallBack(a,b, fnCallback){
    return fnCallback(a+b)
}

console.log(sumCallBack(10,3, function(total){
    return total*2;
}))

function writeName(name='Flavio', age=38){
    console.log(name)
    console.log(age)
}

writeName()
writeName('flavio')



