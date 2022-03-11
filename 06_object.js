// Объекты

const person = {
  name : 'Gleb' ,
  age: 26 ,
  isProgrammer: true ,
  languages: ['ru', 'en' ,'de'] ,
  'complex key' : 'Complex value' ,
  ['key_' + (1+3)] : 'Computed key' , // key_4
  greet() {
    console.log('greet from person')
  } ,
  info() {
    console.log('Info about person with name:', this.name)
  }
}
console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
console.log(person['key_4'])
person.greet()

person.age++
person.languages.push('ua')
console.log(person)
delete person['key_4'] // Удаляет ключ

// Деструктуризация

const name = person.name
const age = person.age
const key = person['key_4']      // Долгое написание
console.log(name, age, key)

const {name, age, key_4 : key} = person     // Упращение
console.log(name, age, key)

// Итерация по объекту

for (let key in person) {
  if (person.hasOwnProperty(key)){
    console.log('key: ', key)             // Сложный вариант с проверкой ( hasOwnProperty)
    console.log('value: ', person[key])
  }
}

Object.keys(person).forEach( key => {
  console.log('key: ', key)               // Упращенный вариант без проверки
  console.log('value: ', person[key])
})

// Context
person.info()

const logger = {
  keys(){
    console.log('Object keys: ', Object.keys(this))
  } ,
  keysAndValues() {
    Object.keys(this).forEach( key => console.log(`"${key}": ${this[key]}`))
  } ,
  withParams(top = false, between = false, bottom = false) {
    if (top) console.log('----- Start -----')
    Object.keys(this).forEach( (key, index, array) => {
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) console.log('-----------')
    })
    if (bottom) console.log('----- End -----')
  }
}

// const bound = logger.keys.bind(person)
// bound()
logger.withParams.call(person, true, true , true)
