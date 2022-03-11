// 1 Переменные
const firstName = 'Gleb'
let age = 15 //number
const isProgrammer = true //boolean

// 2 Мутирование
console.log('Имя человека:' + firstName + ', в возвраст: ' + age)
alert('Имя человека:' + firstName + ', в возвраст: ' + age)

const lastName = prompt('Enter your lastname:')
alert(firstName + ' ' + lastName)

// 3 Операторы
let currentYear = 2022
const birthYear = 2006

const age = currentYear - birthYear

console.log(age)

console.log(currentYear++)
console.log(--currentYear)

const a = 10;
const b = 5

let c = 32

c = c + a
c += a

// 4 Типы данных

const firstName = 'Gleb' //string
let age = 15 //number
const isProgrammer = true //boolean
let x //undefined
//null

// 5 Приоритет операторов
const fullAge = 26
const birthYear = 2006
const currentYear = 2022

const isFullAge = currentYear - birthYear >= fullAge // 27 >= 26 => True

// 6 Условные операторы

const courseStatus = 'fail' // ready, fail, pending

if (courseStatus === 'ready') {
    console.log(' Ohhh...Ready!')
} else if (courseStatus === 'pending') {
    console.log('Pending')
} else {
    console.log('Fail')
}

const num1 = 42 //number
const num2 = '42' // string
console.log(num1 == num2) // true
console.log(num1 === num2) // false

// Тирнарные выражения

const isReady = false

if(isReady) {
    console.log('Ready')
} else {                         //обычный вид
    console.log('Not ready')
}

isReady ? console.log('Ready') : console.log('Not ready') //тирнарное


// 8 Функции

function calculateAge(year) {
    return 2022 - year
}
// console.log(calculateAge(2006))
function logInfoAbout(name, year) {
    let age = calculateAge(year)
    console.log('Человек по имени: ' + name + ' Сейчас ему: ' + --age)
}
logInfoAbout('Gleb', 2006)

// 9 Массивы

const cars = ['Mazda' , 'Mers', 'Ford']
cars[cars.length] = 'Porshe'
console.log(cars)

// 10 Циклы

const cars = ['Mazda' , 'Mers', 'Ford']

for (let  i = 0; i < cars.length ; i++) {
    console.log(i)
    const car = cars[i]
    console.log(car)
}

for (let car of cars) {
    console.log(car)
}

// 11 Objects
const person = {
    firstName: 'Gleb' ,
    lastName: 'Dmitriev' ,
    year: 2006 ,
    language: ['Ru' , 'Ua', 'En'] ,
    hasWife: false ,
    greet: function () {
        console.log('greet')
    }
}
console.log(person.firstName)
const key = 'year'
console.log(person[key])



