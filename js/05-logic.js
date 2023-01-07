//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=vrSEt5J4q2Y&t=819s


if(true){console.log('Hello World!')}

if(false){console.log('Nao vai ser')}

if(3>4){console.log('Hello World!')}

if(3<=4){console.log('Hello World!')}

var textoVazio='';
if(textoVazio){console.log('Hello World!')}

if(!textoVazio){console.log('if')}
else{console.log('else')}

//operador ternario
console.log(true?'Hello World!':'Hi!')

var cor = 'verde';
switch(cor){
    case 'vermelho':
        console.log('cor vermelho')
        break;
    case 'verde':
        console.log('cor verde')
        break;
    default:
        console.log('nao id')
        break
}

switch(cor){
    case 'vermelho':
    case 'amarelo':
    case 'laranja':
        console.log('cor quente')
        break;
    case 'verde':
    case 'azul':
    case 'branco':
        console.log('cor fria')
        break;
    default:
        console.log('nao id')
        break
}
