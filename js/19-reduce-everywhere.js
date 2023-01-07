//https://www.youtube.com/watch?v=BBFvqb6Y43s
const numeros = [5, 12, 30, 10, 99, 4];
/* 
  Soma total
*/

const valorSomaTotal = numeros.reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);

console.log('valorSomaTotal', valorSomaTotal);


/* function somaTotal(arr) {
  return arr.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  }, 0);
}
somaTotal([2, 30, 10, 200])
somaTotal([24, 30, 10, 200])
somaTotal([2, 30, 10, 200]) */

/* Calcular média */
const valorMedia = numeros.reduce(function (acumulador, valorAtual, index, arr) {
  acumulador = acumulador + valorAtual;

  if (index === arr.length - 1) {
    return acumulador / arr.length
  }

  return acumulador;
}, 0);

console.log("valorMedia", valorMedia);


/* 
  Fazendo o mesmo que map e filter
*/

const multi2ComMap = numeros.map(function(valor) {
  return valor * 2;
})

console.log('multi2ComMap', multi2ComMap);

const multi2Reduce = numeros.reduce(function(acumulador, valorAtual) {
  return [ ...acumulador, valorAtual * 2 ]
}, []);

console.log('multi2Reduce', multi2Reduce);


const numerosParesFilter = numeros.filter(function(valor) {
  return (valor % 2) === 0
});

console.log('numerosParesFilter', numerosParesFilter);


const numerosParesReduce = numeros.reduce(function(acumulador, valorAtual) {
  if ((valorAtual % 2) === 0) {
    acumulador.push(valorAtual);
  }

  return acumulador;
}, []);

console.log('numerosParesReduce', numerosParesReduce);

/*
  Flatten
*/

const numerosDeNumeros = [ [12, 40], [10, 5, 3], [99, 49, 100], [ 10, 20 ] ];

const comMap = numerosDeNumeros.map(function(valor) {
  return valor;
})

const comFlatMap = numerosDeNumeros.flatMap(function(valor) {
  return valor;
})

console.log('comMap', comMap);
console.log('comFlatMap', comFlatMap);

const flatComReduce = numerosDeNumeros.reduce(function(acumulador, valorAtual) {
  return [...acumulador, ...valorAtual]
}, [])

console.log('flatComReduce', flatComReduce);


// ======


const usuarios = [
  {
    id: '001',
    nome: 'Ayrton',
    idade: 28,
    email: 'programadorabordo@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=1',
    sexo: 'M',
    estado: 'RJ',
  },
  {
    id: '002',
    nome: 'João',
    idade: 33,
    email: 'joao@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=2',
    sexo: 'M',
    estado: 'PE',
  },
  {
    id: '003',
    nome: 'Maria',
    idade: 25,
    email: 'maria@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=3',
    sexo: 'F',
    estado: 'RJ',
  },
  {
    id: '004',
    nome: 'Eduardo',
    idade: 20,
    email: 'eduardo@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=4',
    sexo: 'M',
    estado: 'RS',
  },
  {
    id: '005',
    nome: 'Antônia',
    idade: 30,
    email: 'antonia@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=5',
    sexo: 'F',
    estado: 'RJ',
  },
  {
    id: '006',
    nome: 'Joaquina',
    idade: 35,
    email: 'joaquina@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=6',
    sexo: 'F',
    estado: 'TO',
  },
  {
    id: '007',
    nome: 'Mateus',
    idade: 42,
    email: 'mateus@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=7',
    sexo: 'M',
    estado: 'MG',
  },
  {
    id: '008',
    nome: 'Davi',
    idade: 19,
    email: 'davi@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=8',
    sexo: 'M',
    estado: 'MS',
  },
  {
    id: '009',
    nome: 'Angélica',
    idade: 27,
    email: 'angelica@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=9',
    sexo: 'F',
    estado: 'RS',
  },
  {
    id: '010',
    nome: 'Fernando',
    idade: 31,
    email: 'fernando@gmail.com',
    foto: 'https://via.placeholder.com/300/200?id=10',
    sexo: 'M',
    estado: 'SP',
  }
];


/* {
  '001': {
    nome: '',
    email: ''
  },
  '002': {
    nome: '',
    email: ''
  }
} */




/* 
  Normalizar dados
*/

const usuariosNormalizados = usuarios.reduce(function(acumulador, usuario) {
  acumulador[usuario.id] = usuario;
  return acumulador;
}, {});

// console.log('usuariosNormalizados', usuariosNormalizados);

console.log(usuariosNormalizados['009'])
console.log(usuariosNormalizados['004'])
console.log(usuariosNormalizados['002'])

/*
  Agrupamentos
*/

/* 
  {
    F: [ {}, {}, {}, { }],
    M: [{}, {}, {}]
  }
  {
    RJ: [ {}, {}, {}, { }],
    RS: [{}, {}, {}],
    PE: [{}, {}, {}, {}],
  }
*/

const usuariosAgrupadosSexo = usuarios.reduce(function(acumulador, usuario) {
  if (!acumulador[usuario.sexo]) {
    acumulador[usuario.sexo] = [];
  }
  acumulador[usuario.sexo].push(usuario);
  
  return acumulador;
}, {})

console.log('usuariosAgrupadosSexo', usuariosAgrupadosSexo)

function agrupaPor(arr, chave) {
  return arr.reduce(function(acumulador, item) {
    if (!acumulador[item[chave]]) {
      acumulador[item[chave]] = [];
    }
    acumulador[item[chave]].push(item);
    
    return acumulador;
  }, {})
}

const agrupadosPorFuncaoEstado = agrupaPor(usuarios, 'estado');
console.log('agrupadosPorFuncaoEstado', agrupadosPorFuncaoEstado)