//EVENTS

// function print() {
//   console.log('print')
// }

// const input = document.querySelector('input')

// input.onkeydown = function () {
//   console.log('running')
// }

// const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)

// function print() {
//   console.log('print')
// }

//FUNCIONALIDADE event
const input = document.querySelector('input')
input.onkeydown = function (event) {
  console.log(event.currentTarget.value)
}
