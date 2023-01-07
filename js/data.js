let d = new Date()
        console.log(d)


        // data e hora atual a região
let data = new Date();
// Fri Nov 16 2018 18:36:40 GMT-0200 (Horário de Verão de Brasília)
console.log(data)
console.log(data.valueOf())
console.log(data)
console.log(data.getTimezoneOffset() * 60000)
console.log(data)
console.log(data.valueOf() - data.getTimezoneOffset() * 60000)
console.log(data)
let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
console.log(data)
var dataBase = data2.toISOString().replace(/\.\d{3}Z$/, '');
console.log(`${data.getHours().toString().padStart(2, '0')}:${data.getMinutes().toString().padStart(2, '0')}:${data.getSeconds().toString().padStart(2, '0')}`)
console.log(1,data2)
console.log(2,dataBase)
// 2018-11-16T18:36:40
console.log("data: "+ data+"\ndataBase: "+dataBase);
console.log("data: "+ data)
console.log(data)