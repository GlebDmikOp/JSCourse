// 1 Функции
//Function Declaration
greet('Kolya')
function greet(name) {
  console.log('Hello -' , name)       // Вызов ф-ции может быть как перед так и после инициализации ф-ции
}

//Function Expression
const greet2 = function greet2(name) {
  console.log('Hello 2 -' , name)      // Вызов ф-ции может быть только после инициализации ф-ции
}
greet2('Kolya')

// 2 Анонимные ф-ции
let counter = 0
const interval = setInterval(function (){  //setTimeout(задает задержку перед вызовом ф-ции)
  if (counter === 5)
  clearInterval(interval)                          //clearTimeout
  else console.log(++counter)
}, 1000)

// 3 Стрелочные ф-ции

function greet(name) {
  console.log('Hello - ', name)
}

const arrow = (name) => {
  console.log('Hello - ', name)                 // Стрелочная ф-ция
}
arrow('Gleb')

const arrow2 = name => console.log('Hello - ', name) // Упращение
arrow2('Ilya')

const pow2 = num => num **2                           // Не надо писать return
console.log(pow2(5))
console.log(pow2(5))

// 4 Параметры по умолчанию

const sum = (a = 40, b = a * 2) => a + b
console.log(sum(41,1)) // 42
console.log(sum()) // 120

function sumAll(...all) {               //res (создается массив all которые включает в себя передаваемые параметры
  let result = 0
  for (let num of all) {
    result+= num
  }
  return result
}
const res = sumAll(1, 2, 3, 4, 5, 6 ,7)
console.log(res)

// 5 Замыкание

function createMember(name) {
  return function(lastName) {
    console.log(name + lastName)
  }
}
const logWithLastName = createMember('Gleb')
console.log(logWithLastName('Dmik'))
