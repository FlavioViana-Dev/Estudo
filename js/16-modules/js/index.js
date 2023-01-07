import sum from './math'
//import HelloWorld from './components/HelloWorld'
//import List from './components/List'
//import { HelloWorld, List } from './components'
import * as Components from './components'
import {group, legalAge as la} from './modules/useful' 
import peopleMock from './mock/people'


console.log('legal age', la(10))
console.log('legal age', la(20))

console.log(sum(1,5))

console.log(Components.HelloWorld('Docthor'))

console.log(group(peopleMock))

//const people = group(peopleMock)
const {legalAge, minor} = group(peopleMock)

const html = `
    ${Components.HelloWorld('Docthor')}
    <h3>Legal Age</h3>
    ${Components.List(legalAge)}    
    <h3>Minor</h3>
    ${Components.List(minor)}
   
`
//${List(people.legalAge)}
//${List(people.minor)}

document.querySelector('#app').innerHTML = html



