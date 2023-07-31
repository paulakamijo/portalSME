/* OPERATORS
BINARY X + Y
UNARY  ++X (Incremento)
TERNARY console.log(true ? 'alo' : 'nada')
onde: true ?(então) 'alo' :(senão) 'nada'
*/

/* expressão NEW
left-hand-side expression
- expressão que cria um novo objeto



let name = new String('EM Monteiro Lobato')
let number = new Number(305)
console.log(name, number)

let date = new Date('2021-12-10')
console.log(date.getMonth())
*/

/* OPERADORES ARITMÉTICOS 
adição (+), subtração (-), multiplicação (*) e divisão (/)

resto da divisão (%)

*/

/*let remainder     // REMINDER (%) É RESTO DA DIVISÃO
remainder = 11 % 3
console.log(remainder)// retorna 2, pois 11/3=9 e restam 2
*/

//incremento (++)
/*
let increment = 0
increment++
console.log(increment)
*/

//incremento antes
/*
let incrementarAntes = 2
console.log(++incrementarAntes)
*/

// incremento depois
/*
let incrementarDepois = 2
console.log(
  incrementarDepois++,
) 
*/

/* não incrementa nada pois imprime o incrementarDepois e depois ele incrementa*/

//decremento(--)
/*
let decrement = 0
decrement--
console.log(decrement)

// exponencial **

console.log(2 ** 3)
*/

/* GROUPING OPERATOR ( )
precedência

2 + 3 * 5

grouping
(2 + 3) * 5

*/

//OPERADORES DE COMPARAÇÃO
// IGUAL A ==
// DIFEERNTE !=
/*
let two = 2
console.log(two == 1)
*/

// ESTRITAMENTE IGUAL A  ===
/*
let one = 1
let two = 2
console.log(one === '1')
console.log(one === 1)

// ESTRITAMENTE DIFERENTE DE  !==
console.log(one !== '2')
console.log(one !== 2)
*/

// OPERADORES DE ATRIBUIÇÃO (ASSIGNMENT)
/*
x = 1 // x recebe 1

x += 2    é igual a x = x + 2  //- addition assignment
x -= 2    é igual a x = x - 2  //- subtraction assignment
x *= 2    é igual a x = x * 2  //- multiplication assignment
x /= 2    é igual a x = x / 2  //- division assignment
x %= 2    é igual a x = x % 2  //- remainder assignment
x **= 2    é igual a x = x ** 2  //- exponentiation assignment
*/

/*
let x = 1
x += 2
console.log(x)

x -= 2
console.log(x)

x /= 2
console.log(x)

x *= 2
console.log(x)

x %= 2
console.log(x)

x **= 2
console.log(x)
*/

// OPERADORES LÓGICOS QUE RETORNAM BOOLEANO
/*
let pao = true
let queijo = true
*/

//AND &&
//console.log(pao && queijo)
// true && true == true
// true && false == false
// false && true == false
// false && false == false

// OR ||
//console.log(pao || queijo)

// NOT !
//console.log(!pao)

//OPERADOR CONDICIONAL (TERNÁRIO)
// Condição ENTÃO valor 1 SE NÃO valor 2
// condition ? value1 : value2

/*
let pao = false
let queijo = true
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)
*/

/*
let age = 21
const canDrive = age >= 18 ? 'Can drive' : "Can't drive"
console.log(canDrive)
*/

// STRING OPERATOR
//concatenation
/*
let alpha = 'alpha'
alpha += 'bet' // mesmo que alpha = alpha + 'bet'
console.log(alpha)
*/

// FALSY E TRUTHY
// é necessário uma condicional BOOLEANA na expressão condicional

//console.log(true ? 'verdadeiro' : 'falso')

//console.log(0 ? 'verdadeiro' : 'falso')
// ocorre type coercitive, onde o JS converde o ZERO em falso

// PRECEDÊNCIA DE OPERADORES
/*
() Grouping
!  ++  --  negação e incremento
multiplicação e divisão
adição e subtração
relacional  < <= > >=
igualdade ==  !=  ===  !==
AND &&
OR ||
CONDICIONAL  ?:
ASSIGNMENT  =  +=  -=  *=
*/
