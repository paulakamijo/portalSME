//console.log('Welcome do Discover')
//Comentário em linha
/* Comentário
multilinha */

/* console.log(`Moeda ${1 + 1}`)

console.log(12.5 === Infinity)

console.log(Infinity)

console.log(12.5 / 'asdf')

console.log(false)

console.log({
  name: 'Paula',
  Idade: 42,
  andar: function () {
    console.log('coding')
  },
})

console.log('array 1', 'array 2', 'array 3')
*/

/* OBJETO -> nome = {propriedade: valor}*/

/*
const person = {
  name: 'Javascript',
  age: 42,
  weight: 10,
  isAdim: true,
}
*/

//console.log(person) //pega o objeto todo

//console.log(person.name) //pega o valor de uma propriedade do objeto

/*  ARRAYS
- declarados entre colchetes
- valores entre vírgulas
- 
 */

// const tipoDeVariaveis = ['var', 'let', 'const']

// console.log(tipoDeVariaveis)

/* Acessando os Arrays
- pegar a posição do elemento, iniciando em 0 (sempre entre colchetes)
- nomeDoArray[índice]
*/

/*
console.log(tipoDeVariaveis[2])
console.log(tipoDeVariaveis.length)

const pmmc = [
  'Saúde',
  'Assistência Social',
  'Educação',
  { gestao: 'Gestão de Pessoas', tipo: 'Funcionários', quantidade: 5.0 },
]

console.log(pmmc)
console.log(pmmc[3].quantidade)
*/
/* let weight
console.log(typeof weight)

let name = 'String'
let age = 15
let stars = 1.9
let isSubscribed = true

console.log(name, age, stars, isSubscribed)
*/

let student = {
  name: 'Aluno',
  age: 15,
  weight: 1.9,
  isSubscribed: true,
}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

let students = []

students = [student]

console.log(students)
console.log(students[0])

/*const aluno = {
  name: 'nomeAluno',
  age: 10,
  peso: 40,
}

aluno.[1]='aluninho' */

const proximoAluno = {
  name: 'Aluno2',
  age: 13,
  weight: 50.5,
  isSubscribed: false,
}

students[1] = [proximoAluno]
console.log(students[1])
console.log(students)
