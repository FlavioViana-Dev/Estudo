//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=MR8IyuhrDK8
/*
Explicação inicial: 00:37
Exemplo lexical scope: 01:54
Exemplo memorização de escopo: 02:51
Criando função privada com closures: 03:37
Evitando funções anônimas com closures: 08:14
Final: 14:16
*/

//funcao privada

function myLibrary(){
    //funcao privada
    function aux(value){
        return 10 +value
    }

    return{
        add5(){
            return aux(5);
        },
        add7(){
            return aux(7);
        }
    }
}

var library = myLibrary();

console.log(library);

console.log(library.add5());
console.log(library.add7());


function start(){
    let name = 'Flavio'
    console.log('first')
    setTimeout(function(){console.log(name)},1000)
}

start();

function printName(name){return function(){console.log(name, 'Nunes')}}

function start2(){
    let name = 'Cris'
    console.log('first')
    setTimeout(printName(name),2000)
}

start2()
