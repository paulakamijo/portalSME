/*
function getScore(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaE = nota < 60 && nota >= 0
  let notaChar

  if (notaA) {
    notaChar = 'A'
    console.log(notaChar)
  } else if (notaB) {
    notaChar = 'B'
    console.log(notaChar)
  } else if (notaC) {
    notaChar = 'C'
    console.log(notaChar)
  } else if (notaD) {
    notaChar = 'D'
    console.log(notaChar)
  } else if (notaE) {
    notaChar = 'E'
    console.log(notaChar)
  } else {
    notaChar = 'Nota inválida'
    console.log(notaChar)
  }
  return notaChar
}

console.log(getScore(99))
*/

/*
let gastos = {
  incomes: [1000, 1200, 450.75],
  expenses: [32.34, 1600, 1400],
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(gastos.incomes)
  const calculateExpenses = sum(gastos.expenses)

  const total = calculateIncomes - calculateExpenses
  const itsOk = total >= 0

  let balanceText = 'negativo'

  if (itsOk) {
    balanceText = 'positivo'
  }
  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()
*/

/*
function transformaGrau(grau) {
  const celsiusExiste = grau.toUpperCase().includes('C')
  const fahrenheitExiste = grau.toUpperCase().includes('F')

  if (!celsiusExiste && !fahrenheitExiste) {
    throw new Error('Grau não identificado')
  }
  //fluxo ideal F-> C
  let grauAtualizado = Number(grau.toUpperCase().replace('F', ''))
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9
  let sinalNovoGrau = 'C'

  //fluxo alternativo C -> F
  if (celsiusExiste) {
    grauAtualizado = Number(grau.toUpperCase().replace('C', ''))
    //let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9
    formula = (celsius) => (celsius * 9) / 5 + 32
    sinalNovoGrau = 'F'
  }

  return formula(grauAtualizado).toFixed(2) + sinalNovoGrau
}

try {
  console.log(transformaGrau('36C'))
  console.log(transformaGrau('65F'))
  transformaGrau('50z')
} catch (error) {
  console.log(error.message)
}
*/

/*

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionáraia',
        author: 'T. Harv Eker',
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason',
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L Lechter',
      },
    ],
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury',
      },
      {
        title: 'Ansiedade - Cocmo enfrentar o mal do século',
        author: 'Augusto Cury',
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey',
      },
    ],
  },
]

const totalCategories = booksByCategory.length

for (let category of booksByCategory) {
  console.log('Total de livro da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log('Total de autores são: ' + authors.length)
}

function booksOfAugustoCury() {
  let books = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == 'Augusto Cury') {
        books.push(book.title)
      }
    }
  }
  //console.log('Total de autores são: ' + authors.length)
  console.log('Livros do autor: ', books)
}

function booksOfAuthor(author) {
  let books = []
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == author) {
        books.push(book.title)
      }
    }
  }
  //console.log('Total de autores são: ' + authors.length)
  console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}

//booksOfAugustoCury()
booksOfAuthor('George S. Clason')

*/

const element = document.querySelector('h1')
// const element2 = document.querySelector('h2')

// element.innerHTML =
//   'Trocando o texto e adicionando tag HTML <small> que altera o restante do conteúdo que está entre as tags</small>'

element.innerHTML = 'Olá Devs! <small> texto aqui </small>'
