//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=sb_XEtwVsG0
/*
00:00:00 | Introdução
00:00:59 | O que é escopo
00:01:26 | Escopo global
00:03:21 | Escopo local
00:06:05 | Escopo dinâmico
00:10:14 | Escopo lexical
00:12:19 | Escopo de bloco com let
00:14:56 | Diferenças do uso de let para o var
00:17:20 | Considerações finais
*/
let actor = 'oi'
{
    var email='flavio.viana@gmail.com'
    let actor = 'Flávio'
    console.log(email)
    console.log(actor)
}

console.log(email)
console.log(actor) // quando declara com let ela só existe dentro daquele escopo

