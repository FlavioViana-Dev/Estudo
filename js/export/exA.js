// ficheiro A.js

// sintaxe CommonJS
module.exports = {
    foo: function(){ return 'bar';},
    baz: 123
}

// sintaxe ES6
export function foo(){ return 'bar';}
export const baz = 123;

// ou

function foo(){ return 'bar';}
const baz = 123;

export default {foo, baz};