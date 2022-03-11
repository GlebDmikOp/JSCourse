// Массивы
const cars = ['Mazda', 'Ford', 'BMW', 'Mers']
const fib = [1,1,2,3,5,8,13]                        // могут хранить что угодно
const people = [
  {name: 'Gleb', number: 305},
  {name: 'Katya', number: 505},
  {name: 'Denis', number: 432}
]

// Методы массива
cars.push('Reno') // add to end
cars.unshift('Volga') // add to begin
const firstItem = cars.shift() // delete first element и добавляет его в переменную
const lastCar = cars.pop() //delete last element и доб. в переменую
console.log(cars.reverse()) // разворачивает массив

// Нахождение по индексу
const index = cars.indexOf('BMW')
cars[index] = 'Porsche'
console.log(cars)

const index = people.findIndex( function(person) {
  return person.number === 505
}) // Находит индекс человека в массиве объектов через его номер
console.log(people[index].name)   // Выводит имя человека в массиве объектов people

// Вариант нахождения объекта через метод массива find
const person = people.find(person => person.number === 505)     // находит объект в массиве по его номеру
console.log(person)

// Вариант нахождения объекта через цикл for
let findedPerson
for (const person of people) {
  if (person.number === 505) {
    findedPerson = person
  }
}
console.log(findedPerson);

console.log(cars.includes('BMW')) // true
console.log(cars.includes('Reno')) //false

const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars)

const pow2 = num => num ** 2
const sqrt2 = num => Math.sqrt(num)
const pow2Fib = fib.map(pow2).map(sqrt2)
console.log(pow2Fib)
const pow2FibFiltered = fib.map(pow2).filter(num => num > 20)
console.log(pow2FibFiltered)

const allBudget = people
  .filter(person => person.number > 400)
  .reduce((acc, person) => {
    acc+= person.number
    return acc
  }, 0)
console.log(allBudget)

// Задача 1 (Первернуть строчку)
const text = 'Привет, мы изчаем JavaScript'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)

