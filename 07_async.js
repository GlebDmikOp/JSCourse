// Асинхронность ( Event Loop)

const timeout = setTimeout(() => {
  console.log('After timeout')
}, 2500)

clearTimeout(timeout) //  Убирает timeout (никогда не вызывается)

const interval = setInterval(() => {
  console.log('After interval')
}, 1000)

clearInterval(interval)

const delay = (callback, wait = 1000) => {
  setTimeout(callback, wait)                          // вызов timeout через функцию
}
delay(() => {
  console.log('After 2 seconds')
}, 2000)

// Promise

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {                                      //  Создание promise
         resolve()
      // reject('Что-то пошло не так. Повторите попытку')
    }, wait)
  })
  return promise
}


delay(2500)
  .then( () => console.log('After 2 sec') )
  .catch(err => console.error(err))          // Методы промиса
  .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
  1, 1, 2, 3, 5, 8, 13
]))
// getData().then(data => console.log(data))

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log('Data: ', data)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Finally')
  }
}
asyncExample()