const http = require('http')
const express = require('express') // Получаем модуль express
const server = express() // создаем приложение

const fs = require('fs')

///////////////////////////////////////////////
// app.get('/', function(req, res) { //Установаливаем обработчик для маршурта 
//  // res.end('Hello from Express')
//   res.end('Hello World!!!!')
// })
//            ///начинаем прослушивание подключение на 3000 порту
// app.listen(3000)


//////////////////////////////////////////////////////
// let message = 'Hi express!!!!!'
//  const server = http.createServer((req, res) => {
//     console.log(req.url)
//     console.log(message)
//     res.end(message)
// })
// server.listen(3000,"127.0.0.1", () => {
//     console.log('Сервер запущен')
// })


server.get('/', function (req, res) {
    res.end('Hello from Express')
})
server.listen(3000)

//////////////////////////////////
//////Асинхронность///////////////
// function display(data) {
//   console.log(data)
// }

// console.log('Начало работы программы')
// console.log('Обработка данных ')
// console.log('Завершение работы программы')

///////////////////////////////////////////

// function displaySync (callback){
//   callback()
// }

// console.log('Начало работы')

// setTimeout(() => {
//     console.log('timeout 500')
// },500)

// setTimeout(() => {
//    console.log('timeout 100')
// }, 100)

// displaySync(() => {
//     console.log('withhout time')
// })
// console.log('Завершение программы')

///////////Синхронное чтение из файла////////////
console.log('Синхронное чтение из файла')
let file = fs.readFileSync('file.txt', 'utf8')
console.log(file)
///////////////////////////////////////////////


//Асинхронное чтение из файла

let fileH = fs.readFile('h.txt', 'utf8', 
    function (err, data) {
        console.log('Асинхронное чтение из файлов ')
        if (err) throw console.log(`Error: ${err}`)
        // Чтение из файла
        console.log(data)
    })
//////////////////////////////////////////////////

//////Запись в файл ///////////////////////////////

let fileWriteFile = fs.writeFile('file.txt','Метод создает строку URL запроса от заданного obj перебирая «собственных свойств» объекта.',
                        function(err) {
                            if (err) throw err
                            console.log('Асинхронная запись в файл')
                            let data1 = fs.readFileSync('file.txt')
                            console.log(data1)
                        })

fileWriteFile = fs.appendFileSync('file.txt', 'Метод добавления appendFileSync')
fileWriteFile = fs.readFileSync('file.txt', 'utf8')
console.log(fileWriteFile)
