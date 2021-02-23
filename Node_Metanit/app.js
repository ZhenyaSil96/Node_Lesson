// const http = require('http')
// http.createServer((request, response) => {
//     response.end("Hello Node")
// }).listen(3000)

////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http') //Подключение модуля http
const server = http.createServer((req, res) => {  // Тут стрелочная функция будут называтся heandler 
    console.log(req.url)                          // Функция принимает два параметра request , response
    res.write('<h1>Hello World</h1>')             // request запрос на сервер 
    res.write('<h1>Hello Node</h1>')              // response ответ на сервер 
})                                                // res.write - запись 
server.listen(3000, () => {                       // Запуск сервера 
    console.log('Server running')
})

///////////////////////////////////////////////////

const os = require('os')
const greeting = require('./greeting')
const User = require('./user')
const Car = require('./car')
const welcome = require('./welcome')


let user = new User('Yevgenii', 25)
user.sayHi()
global.console.log(user.name)

let car = new Car('Marka','Toyta', 'Model','Camry')
console.log(car)

welcome.getMorningMessage()
welcome.getEvningMessage()

let userName = os.userInfo().username
console.log(userName)
console.log(`Дата запроса ${greeting.date}`)
console.log(greeting.getMessage(userName))

let nodePath = process.argv[0]
let appPath = process.argv[1]

console.log('nodePath:'+ nodePath)
console.log('appPath:'+ appPath)

////////////////////////////////////////////////////




