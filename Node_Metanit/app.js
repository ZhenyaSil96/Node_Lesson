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
let userName = os.userInfo().username
console.log(userName)

////////////////////////////////////////////////////

const greeting = require('./greeting')


