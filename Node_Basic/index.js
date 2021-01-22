// const userObj = require('./user')

// userObj.name = 'Pavel'
// console.log(userObj.name)
// userObj.sayHello()

// console.log(userObj)

///////////////////////////////

// const http = require('http')

// const server = http.createServer( (req, res) => {
//   console.log(req.url)

//   res.write('<h1>Hello from NodeJS</h1>')
//   res.write('<h2>Hello from NodeJS</h2>')
//   res.write('<h3>Hello from NodeJS</h3>')
//   res.end(`<div style = "background: red; with: 200px; height: 200px;"> 
//   <h1>Test 3</h1>
//   </div>`)
// }) //Тут стрелочная функция будут называться hendler
   // Функция принимаетдва параметра request и response
   // requet - запрос на сервер
   // response - отіет от сервера

   //Запуск сервера
//    server.listen(3000, () => {
//        console.log('Server is running...')
//    })

   //////////////////////////////////////////////////////////////////////

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if(req.method === 'GET') {
      res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
      })

      if(req.url === '/') {
          fs.readFile(
              path.join(__dirname,'views', 'index.html'),
              (err, content) => {
                  if(err) {
                      throw err
                  }
                  res.end(content)
              }
          )
      } else if(req.url === '/about') {
        fs.readFile(
            path.join(__dirname,'views', 'about.html'),
            (err, content) => {
                if(err) {
                    throw err
                }
                res.end(content)
            }
        )
      } else if (req.url === '/api/users') {
        res.writeHead(200, {
            'Content-Type': 'text/json'
        })
        const users = [
            {
                name:'Yevhenii',
                age: 20
            }, 
            {
                name: 'Anna',
                age: 19
            }
        ]


        res.end(JSON.stringify(users))
      }
  
    } else if(req.method === 'POST') {
        const body = []

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
          body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`
         <h1>Ваше сообщение: ${message} </h1>
        `)
        })
        
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})
