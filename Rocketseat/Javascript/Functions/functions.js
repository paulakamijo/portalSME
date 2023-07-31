// Função ANÔNIMA ou function anonymous/expression- função sem nome
/* parâmetros da função (parameters) - conteúdo que vai entre parênteses, após a function */

/*
const sum = function (number1, number2) {
  total = number1 + number2
  return total
}
*/

/* Quando uma função é chamada ela SEMPRE RETORNA ALGO, então é necessária a palavra RETURN
Caso não haja "Return", o valor retornado será UNDEFINED
*/

/* 
sum(2, 3) //2 e 3 são argumentos da função criada
sum(1021, 1024)

let number1 = 34
let number2 = 35

//sum(number11, number21)

console.log(`o number 1 é o ` + number1)
console.log(`o number 2 é o ` + number2)
console.log(
  `e a soma entre number11 e number21 é ${sum(number1, number2)}`,
) 
*/

/* retorna o valor de RETURN da função*/

/* ARROW FUNCTION tira o nome da função e entre os parênteses e chaves (bloco), inserimos uma =>
 */

/*
const sayMyName = () => {
  console.log('Educação')
}

sayMyName()
*/

/* CALLBACK FUNCTION
é uma função que está passando como parâmetro para outra função
- chamar uma função e chamar a função de volta  
*/

/*
function sayMyName(name) {
  console.log('antes de executar a função')
  name()
}

sayMyName(() => {
  console.log('estou em uma callback')
})
*/

/* FUNÇÃO CONSTRUTORA - NEW
Escrever o nome da função construtora com a letra inicial maiúscula

*/

/*

function Escola(name) {
  this.name = name // referencia a const unidade this == unidade
}

const unidade = new Escola('CEIM Argêu Batalha') // new cria um novo objeto

const unidade2 = new Escola('EM Monteiro Lobato')

console.log(unidade)
console.log(unidade2)
*/

/* PROTOTYPE
objeto ascendente com funcionalidades e propriedades criadas anteriormente
Acesso se dá através do ponto após o nome do objeto e inserir o __proto__
*/
/*
'Escola'.__proto__

let word = 'Unidade escolar'
console.log(word + ' possui ' + word.length + ' letras ')
*/

/* TYPE CONVERSION
STRING X NUMBER


let letras = '123'

console.log(Number(letras))

let numberToString = 567

console.log(String(numberToString))
console.log(typeof numberToString)
*/

/*
let number = 185.976564
console.log(number.toFixed(3).replace('.', ','))

let phrase = 'Dois tipos de unidades escolares: Municipais e Subvencionadas'
console.log(phrase.toUpperCase())

let myArray = phrase.split(' ')
console.log(myArray)

console.log(
  phrase.includes('escolares'),
) */

/* encontra uma palavra num texto através da função "includes ()"   */

//console.log(['a', 1, () => console.log('b')].length)
/* contando elepmentos num array*/

/*
let word = 'Educação'
console.log(Array.from(word))
*/
//transforma uma cadeia de caracteres em elementos de um array

let techs = ['html', 'css', 'js']
// colocando um elemento no fim do array usando push
console.log(techs.push('nodejs'))
console.log(techs)

//colocando um elemento no começo usando unshift
techs.unshift('sql')
console.log(techs)

//removendo
techs.pop()
console.log(techs)

techs.shift()
console.log(techs)
