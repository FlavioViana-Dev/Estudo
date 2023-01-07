//Programador a Bordo - youtube
//https://www.youtube.com/watch?v=IEx_e4M2vt4

var count=0
while(count<5){
    console.log(count)
    ++count
}

var count=0
while(count<5){
    if(count===3){
        break;
    }
    console.log(count)
    ++count
}

var count=0
while(count<100){
    if(count%3===0&&count%5===0){
        console.log('PING PONG')
    } else if(count%3===0){
        console.log(`${count} - PING`)
    }
    else if(count%5===0){
        console.log(`${count} - PONG`)
    }
    
    ++count
}

for(var count =0; count<10; count++){
    console.log(count)
}

var numerosAleatorios=[3,5,10,2,19,21,13]
for(var count =0; count<numerosAleatorios.length; count++){
    console.log(`${count} - ${numerosAleatorios[count]}`)
}

for(var i =numerosAleatorios.length; i>=0; i--){
    console.log(`Posição ${i} com decremento: ${numerosAleatorios[i]}`)
}

var i=0
for(; i<numerosAleatorios.length;){
    console.log(`Semm valor inicial e incremento: ${numerosAleatorios[i]}`)
    i++;
}

var condicao = true;
var count =1;
for(; condicao;){
    if(count%5===0){
        condicao=false;
    }
    console.log(`Condição booleana simples: ${count}`)
    count++;
}

for(var i=0; i<10; i++){
    if(i===5){
        break
    }
    console.log(`Utilizando break ${i}`)
}

for(var i=0; i<10; i++){
    if(i%2===0){
        continue
    }
    console.log(`Utilizando continue ${i}`)
}

var numerosAleatorios=[3,5,10,2,19,21,13]
for(var num of numerosAleatorios){
    console.log('for of', num)
}