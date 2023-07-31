/*
let temperature = 38.5

if (temperature >= 37.6) {
  console.log('febre alta')
} else if (temperature < 35.5 && temperature >= 37) {
  console.log('febre moderada')
} else {
  console.log('saudável')
}
*/

// melhor

/*
let temperature = 35.5
let highTemperature = temperature >= 37.6
let mediumTemperature = temperature < 35.5 && temperature >= 37

if (highTemperature) {
  console.log('febre alta')
} else if (mediumTemperature) {
  console.log('febre moderada')
} else {
  console.log('sem febre')
}
*/

// SWITCH
/*
let expression = 'c'

switch (expression) {
  case 'a':
    // codigo
    console.log('a')
    break
  case 'b':
    // codigo para expression b
    console.log('b')
    break
  default:
    console.log('default')
}
*/

/*
function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case '+':
      result = number1 + number2
      break

    case '-':
      result = number1 - number2
      break

    case '*':
      result = number1 * number2
      break

    case '/':
      result = number1 / number2
      break

    default:
      console.log('não implementado')
      break
  }

  return result
}

console.log(calculate(5, '%', 4))
*/

//THROW e CATCH
/*
-throw dispara um erro caso algo dê errado em uma função

*/

/*
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log('after error function')
}

sayMyName('pk')

console.log('após a função de erro')

try {
  sayMyName('pk')
} catch (e) {
  console.log(e)
}

console.log('após a função de erro')
*/

//ESTRUTURA DE REPETIÇÃO - FOR
// for(let i = 0; i< 10; i++)
// break - para a execução do loop
// continue ele pula o que está sendo executado no momento

/*
for (let i = 100; i > 0; i--) {
  if (i === 50) {
    //break
    continue
  }

  console.log(i)
}
*/
// ESTRUTURA DE REPETIÇÃO - WHILE
// mais utilizado quando não é conhecido o momento da parada
/*
let i = 0
while (i < 10) {
  console.log(i)
  i++
}
*/

// ESTRUTURA DE REPETIÇÃO - FOR...OF
/*
let name = 'Monteiro'
let names = ['Haydée', 'Monteiro', 'Argêu']
*/
//tirar um caractere de name
/*
for (let char of names) {
  console.log(char)
}
*/

//for of
/*
for (let name of names) {
  console.log(name)
}
*/

//ESTRUTURA DE REPETIÇÃO - FOR IN

let person = {
  name: 'Monteiro',
  age: 61,
  bairro: 'Ponte Grande',
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}
