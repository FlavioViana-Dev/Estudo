//é um modo que se ativa no javascript, forçar os erros que 
//são silenciados em javascript e agora ele exibir
//evita erros futuros de logica

//exemplos se tirar o use strict nao tera erros

"use strict"

// a variavel nome nao foi declarada para corrigir bastar colocar let nome
/*const hi = () => {
    nome = "Flávio"
    console.log("Olá", nome)
}

hi()*/


// nesse segundo exemplo a propriedade nota nao tem o metodo set implementado logo a propriedade nao pode alterar o valor de nota e por isso retorna o error
/*class Aluno{
    get nota(){
        return 6
    }
}

let aluno = new Aluno()

aluno.nota = 10

console.log(aluno.nota)*/


//no terceiro exempolo vou tentar apagar um objeto que nao pode ser apagado
//delete window.document


//no quarto exemplo foi declarado duas vezes o mesmo parametro
const soma =function(a,a,c){
    return a+a+c;
}
console.log(soma(1,3,2))
