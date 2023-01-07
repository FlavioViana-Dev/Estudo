// expressões regulares
// 5 padrões que você
// precisa conhecer

// padrao 1 : | or
const reg1 = new RegExp("devpleno.com|fulldev.net");
const str1 = "devpleno.com";
const match1 = str1.match(reg1);
// console.log(match1);

// padrao 2: group ( )
const reg2 = new RegExp("(http|https)://(devpleno.com|fulldev.net)");
const str2 = "https://devpleno.com";
const match2 = str2.match(reg2);
// console.log(match2);

// padrao 3: range [ ] // [a-zA-Z]
const reg3 = new RegExp("\\(([1-9][0-9])\\)");
const str3 = "(10) 9999-8888";
const match3 = str3.match(reg3);
// console.log(match3)

// padrao 4: quantitativo { } // {min, } {, max}
const reg4 = new RegExp("\\(([1-9][0-9])\\) ([0-9]{4,5}-[0-9]{4,4})");
const str4 = "(10) 98999-8888";
const match4 = str4.match(reg4);
//console.log(match4);

// padrao 5 - qualquer coisa
const reg5 = new RegExp("(https|http).*(\\.[a-z]{1,})");
const str5 = "https://devpleno.com";
const [encontrado, protocol, domainExtension] = str5.match(reg5);
console.log(encontrado, protocol, domainExtension);