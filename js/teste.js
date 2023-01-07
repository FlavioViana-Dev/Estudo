const url = 'https://api.docthor.com.br/receita?cliente=51&pos=0&tipoRegistro=1&filtro=&ordernar=&profissionalLogado=15';
/*async function getUsers() {
    const result = await fetch('https://api.docthor.com.br/receita?cliente=51&pos=0&tipoRegistro=1&filtro=&ordernar=&profissionalLogado=15');
    return result//.json();
  }*/

  async function getUsers() { request.get(url).then(resultado => { return request.get() })}


          
  const users =  getUsers();

  console.log(users)

