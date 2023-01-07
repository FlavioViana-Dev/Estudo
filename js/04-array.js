//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=vrSEt5J4q2Y&t=819s

var numeros = [5,3,12,17,10,99]
console.log(numeros)

console.log(numeros[0])

console.log(numeros[2])

console.log(numeros.length)

//retorna o ultimo item e tirar ele da lista
console.log(numeros.pop())

console.log(numeros)

console.log('slice', numeros.slice(2,5))

console.log(numeros.slice(3))

console.log(numeros.join('--'))

console.log(numeros.join(' '))

var usuario=[
    'Flavio',
    38,
    'Docthor',
    2021,
    'Brasileiro'
]

console.log(usuario)

usuario.push('RJ')

console.log(usuario)

console.log(usuario.includes('Brasileiro'))

console.log(usuario.includes('Japonês'))

console.log(usuario.includes(2021))

console.log(usuario.indexOf(2021))
console.log(usuario.indexOf('Japonês'))

var arr1 = [3,2,1]
var arr2 = ['Data Time','a','fulano']

var resultado = arr2.concat(arr1)
.concat(['teste', 'beltrano', 'ciclano'])
console.log(resultado)

console.log([...arr1, ...arr2, 
    ['teste', 'beltrano', 'ciclano']])

console.log(usuario)

/*var nome = usuario[0]
var idade = usuario[1]
var ano = usuario[3]

console.log(nome, idade, ano)*/
//array destruct
var [nome, idade,,ano]=usuario;
console.log(nome, idade,ano);