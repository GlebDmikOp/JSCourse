//3 Строки

// Правильное присвоение строк переменным
const name = 'Глеб'
const age = 15

//const output = 'Привет, меня зовут' + name + 'и мой возвраст' + age + 'лет.'// плохой вариант
const output = `Привет, меня зовут ${name} и мой возвраст ${age < 20 ? age : false} лет.`

console.log(output)


// Методы string
const name = 'Глеб'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(0))
console.log(name.indexOf('леб')) //1
console.log(name.startsWith('гле')) // false
console.log(name.startsWith('Гле')) // true
console.log(name.endsWith('еб')) // true
console.log(name.repeat(3))

const string = '   password   '
console.log(string.trim()) // убирает пробелы


// Вывод сообщение через фу-цию с заменой параметров
function InfoAboutPerson(s, name, age) {
  if (age < 18) {
    age = 'Вам еще мало'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Gleb'
const personAge = 15

const output = InfoAboutPerson`Имя: ${personName} , возвраст: ${personAge} !`
console.log(output)
