let  pessoas = [{id: 4 ,firstName: 'John'}]
console.log(pessoas)
let pessoa = {id:1, firstName: 'Flavio'}
pessoas.push(pessoa)
console.log('==========================')
console.log(pessoas)
pessoa = {id:2, firstName: 'Pedro', ativo: true}
pessoas.push(pessoa)
console.log('==========================')
console.log(pessoas)
console.log('==========================')
for(i=0; i<=pessoas.length; i++){
    try {
        console.log(!!pessoas[i].ativo)
    } catch (error) {
    }     
}