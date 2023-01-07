// purposeless condition

function eDeMaior (idade, sexo) {
    // if (idade >= 18 && sexo === 'M') {
    //    return true;
    //  } else {
    //    return false;
    //  }
  
    return (idade >= 18 && sexo === 'M');
  }
  
  console.log(eDeMaior(15, 'M'))
  
  
  // Positivo
  let nome = 'Ayrton Teshima';
  
  if (nome.trim() !== '') {
    console.log('nome válido dqdqw!'); 
  }
  
  if (nome.trim() !== '' && nome.trim().length >= 3) {
    console.log('Nome válido!');
  }
  
  // function isValidName (name) {
  //   return name.trim() !== '' && name.trim().length >= 3;
  // }
  
  // if (isValidName(nome)) {
  //   console.log('Foi!')
  // }
  
  function isNotEmpty (field) {
    return field.trim() !== ''
  }
  
  // function gte (length, field) {
  //   return field.length >= length;
  // }
  
  // if (isNotEmpty(nome) && gte(3, nome)) {
  //   console.log('nome valido!')
  // }
  
  // function isValidName(name) {
  //   return isNotEmpty(name) && gte(3, name)
  // }
  
  // if (isValidName(nome))
  
  // function lte (length, field) {
  //   return field.trim().length <= length;
  // }
  
  function gte (length) {
    return function(field) {
      return field.length >= length;
    }
  }
  
  function lte (length) {
    return function(field) {
      return field.length <= length;
    }
  }
  
  const validations = {
    nome: [isNotEmpty, gte(10), lte(30)]
  }
  
  // const result = validations.nome.every(function(fn) {
  //   return fn(nome);
  // })
  
  function isValid (validations, field) {
    return validations.every(function(fn) {
      return fn(field);
    })
  }
  
  if (isValid(validations.nome, nome)) {
    console.log('nome válido!')
  }
  
  
  const operator = '*';
  
  if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    console.log('operador válido!')
  }
  
  if (['+', '-', '*', '/'].includes(operator)) {
    console.log('operador válido utilizando includes')
  }
  
  // optional chaining
  
  const usuario = {
   endereco: {
     bairro: 'meu bairro'
   }
  };
  
  if (usuario && usuario.endereco && usuario.endereco.bairro) {
    console.log('acessou usuario')
  }
  
  const bairro = usuario.endereco?.bairro;
  console.log(bairro);
  
  // Ternário
  let idade = 20;
  const eDeMaior2 = idade >= 18 
    ? 'é de maior' 
    : 'é de menor';
  
  console.log(eDeMaior2);
  
  
  if (idade >= 18) {
    eDeMaior3 = 'É de maior'
  } else {
    eDeMaior3 = 'É de menor!'
  }
  
  // novo exemplo
  
  function getDiscount(people) {
    let price;
    if (people < 10) {
      price = 500;
    } else if (people >= 10 && people < 25) {
      price = 350;
    } else if (people >= 25 && people < 100) {
      price = 250;
    } else if (people >= 100) {
      price = 200;
    }
    return price;
  }
  
  console.log(getDiscount(305))
  
  function lt (valor1) {
    return function (valor2) {
      return valor2 < valor1;
    }
  }
  
  function between (n1, n2) {
    return function (valor) {
      return valor >= n1 && valor < n2;
    }
  }
  
  function gte2 (valor1) {
    return function (valor2) {
      return valor2 >= valor1;
    }
  }
  
  function getDiscount2 (people) {
    const [ _, result ] = [
      [ lt(10), 500 ],
      [ between(10, 25), 350 ],
      [ between(25, 100), 250 ],
      [ gte2(100), 200 ]
  
    ].find(function([ teste ]) {
      return teste(people)
    });
  
    return result;
  }
  
  // quokka
  
  console.log(getDiscount2(100));
  
  
  // Objetos
  
  // function setAccType(accType) {
  //   if (accType === "PLATINUM") {
  //     return "Platinum Customer";
  //   } else if (accType === "GOLD") {
  //     return "Gold Customer";
  //   } else if (accType === "SILVER") {
  //     return "Silver Customer";
  //   }
  // }
  
  const types = {
    0() {
      return 'Platinum Customer'
    },
    GOLD() {
      return 'Gold Customer'
    },
    SILVER() {
      return 'Silver Customer'
    } 
  };
  
  function setAccType(accType) {
    return types[accType]();
  }
  
  console.log(setAccType(0))