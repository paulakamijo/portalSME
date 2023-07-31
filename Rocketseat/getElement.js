// getElementById('')
// const element = document.getElementById('page-title')
// console.log(element)

// const element = document.getElementsByClassName('one')

// console.log(element)

// const element = document.getElementsByTagName('p')
// console.log(element)

// const element = document.querySelector('[src]')
// console.log(element) //pega o primeiro que achar

// const elements = document.querySelectorAll('#content')

// console.log(elements)

// getElementById (element)
// getElementsByClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element) um pouco mais lento que getElementById
// querySelectorAll (Nodelist)

// const element = document.querySelector('h1')

//TEXT-CONTENT
// element.textContent = 'Novo Valor atribuído'
//Aqui foi selecionado o h1, que na pg html estava "get Element" e substitui por "Novo Valor atribuído"

// const element = document.querySelector('h1')
// element.textContent += 'Novo Valor atribuído'

// console.log(element.TextContent)

//INNERTEXT

// const element = document.querySelector('h1')
// element.innerText = 'Números'

//substitui o texto de h1 pelo conteúdo de "innerText"

// const element = document.querySelector('h1')
// element.innerHTML = 'Coding! <small>!!</small>'

//element.value

// const element = document.querySelector('[input]')

// const element = document.querySelector('input')

// console.log(element.value)

// element.value = 'another value'

// const element = document.querySelector('h1')

// console.log(element.value)

// element.value = 'another value'

//innerHTML
// element.innerHTML =
//   'Olá! <small>texto entre tags consegue ser formatado usando o InnerHTML</small>'

//VALUE
// const element = document.querySelector('input')
// element.value = 'qualquer valor'

//element.style
// const element = document.querySelector('body')

// element.style.backgroundColor = '#f3f3d2'
// element.style.fontFamily = 'Courier New'
// console.log(element.style.backgroundColor)

// const element = document.querySelector('body')
// element.classList.add('active', 'green')
// console.log(element.classList)
// element.classList.toggle('active')

const body = document.querySelector('body')
console.log(body.childNodes)
