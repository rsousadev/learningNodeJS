//url pacote https://www.npmjs.com/package/validator

//modulo para validação de campos
//const validator = require('validator')

//alteração de cores no terminal
const chalk = require('chalk')

const yargs = require('yargs')
/*
* Exibindo retorno de função
* Utilizando outro arquivo
*/

//Importando arquivo notes.js
const hello = require('./notes.js')

//Inserindo parametro na função hello em notes.js
const name = hello()

//Exibindo retorno da função hello armazenada em name
console.log(name)

//validação de valor
//console.log(validator.isEmail('ricardo@sbcopy.com.br'))

//alterando a cor da saída no terminal
console.log(chalk.green('Success!'))


console.log(process.argv[2])