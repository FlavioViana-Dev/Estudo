//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=AyMwn_751RY
/*
Criando uma constante: 00:67
Escopo de bloco: 01:46
Diferenças para o let e o var: 03:17
Redeclarando: 03:51
Reatribuindo: 05:12
Peculiaridade: O valor de uma constante pode alterar: 05:44
*/

const birthdayYear = 1982

console.log(birthdayYear)

if(true){
    const actor ='Flavio'
    console.log(actor)
}

//const nao pode redeclarar e nem reatribuir
//let nao pode redeclarar, mas pode atribuir novo valor
//var pode redeclarar e atribuir novo valor


//vc pode alterar um objeto que está na constante mas não valor da constante

const languages = ['javascript', 'c#', 'vue']
console.log(languages)

languages[1] = 'MongoDB'
console.log(languages)

languages.push('TypeScript')
console.log(languages)

const user = {
    name: 'Flavio',
    age: 37
}

console.log(user)

user.age=38
console.log(user)