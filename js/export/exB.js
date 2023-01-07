// ficheiro B.js

// sintaxe CommonJS
const A = require('./exA.js');
const foo = A.foo;
const baz = A.baz;

// sintaxe ES6
import * as A from './exA.js';
const foo = A.foo;
const baz = A.baz;

// ou somente
//import {foo, baz} from './exA.js';