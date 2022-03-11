// 1 Number

// Типы number
const num = 42 //integer
const float = 42.42 //float
const pow = 10e3

// Методы Number
console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
console.log('MAX_VALUE ', Number.MAX_VALUE)
console.log('POSITIVE_INFINITY ', Number.POSITIVE_INFINITY)
console.log('2/0', 2/0) // infinity
console.log(Number.NaN) // Not a Number
console.log(typeof NaN) // Number
console.log(2 / undefined) // NaN
const weird = 2 / undefined;
console.log(Number.isNaN(weird)) //true
console.log(Number.isFinite(Infinity)) //false


// Парсинг строковых значений
const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2) //Number
console.log(+stringInt + 2) // Same meaning as in the first
console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)

console.log(0.4 + 0.2) //0.6000001
console.log(+(0.4 + 0.2).toFixed(1)) // 0.6

// 2 BigInt
console.log(typeof 9007199254740991999n) // bigint
console.log(9007199254740991999n - 900719925474099199n)
console.log(-9007199254740991999n)

console.log(parseInt(10n) - 4) //Number
console.log(10n - BigInt(4)) // BigInt

// 3 Example

function getRandomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
console.log(getRandomBetween(10, 42))
