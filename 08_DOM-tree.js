// DOM - ДЕРЕВО

// Работа с window
// window.alert('1')
// window.prompt('Как тебя зовут?')
// window.confirm('Тебе есть 18?')

// Способы как найти узел
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]  // Лучше не пользоваться
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class') // может найти элемент по любым параметрамы ( всегда 1 элемент)
const heading2 = document.querySelector('h2')
console.log(heading2)

// Способы как найти другой элемент с тем же тегом

// Первый способ
// const heading3 = heading2.nextElementSibling
// console.log(heading3)

// Второй способ
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[1]
console.log(heading3)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Click on link', event.target.getAttribute('href'))
})

setTimeout(() => {
  addStylesTo(heading, 'JavaScript', 'red')
}, 2000)

setTimeout(() => {
  addStylesTo(heading2, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
  addStylesTo(link, 'И все получиться!', 'green', '2rem')
}, 4500)


// Функция изменяющая узел
function addStylesTo(node, text, color, fontSize) {
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.textContent = text
    node.style.padding = '2rem'
    node.style.marginTop = '50px'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
      node.style.fontSize = fontSize
    }
}

// Добавление событий

heading.onclick = () => {
  // console.log('click')
  if(heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.background = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.background = '#000'
  }
}

heading2.addEventListener('dblclick', () => {
  // console.log('click')
  if(heading2.style.color === 'blue') {
  heading2.style.color = '#000'
  heading2.style.background = '#fff'
} else {
  heading2.style.color = 'blue'
  heading2.style.background = '#000'
}
})
