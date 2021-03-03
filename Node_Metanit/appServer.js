// const http = require('http')
// http.createServer(function(req, res) {
//     console.log(req.url)
//    res.end('Hello')
// }).listen(3000)
//////////////////////////////////////////////

// const http = require('http')
// http.createServer(function (req, res){
   
//    console.log('URL = '+ req.url)
//    console.log('Headers = '+ req.headers['user-agent'])
//    console.log('All headers = ' + req.headers)
//    console.log('Method = '+ req.method)

   
//    //res.setHeader('Content-Type', 'txt.html')
//    res.setHeader("UserId", 12)
//    res.write("<h2>Hi Node</h2>")
//    res.write('<h1>Hello World</h1>') 
//    res.end()

//    res.end()
// }).listen(3000)
/////////////////////////////////////////////////////

// const http = require('http')
// http.createServer(function (req, res){
//     res.setHeader("Content-Type", "text/html; charset=utf-8;");
//     if(req.url === '/home' || req.url === '/'){
//         res.write('<h1>Welcome home </h1>')
//     }
//     else if (req.url === '/about'){
//         res.write('<h1>About</h1>')
//     }
//     else{
//         res.write('<h1>Not found</h1>')
//     }
//     res.end()
// }).listen(3000)

/////////////////////////////////////////////////

// подключение express
// const express = require('express')
// // создаем объект приложения
// const app = express()
// app.use('/about',(req, res, next) => {
//   console.log('Middleware 1')
//   if (req.url == '/about'){
       
//        res.send('This main')
//   } else{
//     next()
//   }
// })
// // определяем обработчик для маршрута "/"
// app.get('/',function(req, res){
//     // отправляем ответ
//   res.end("<h1>Hello Express!</h1>")
  
// })
// // app.get('/about', (req, res) => {
// //   res.end('<h1>About</h1>')
// // })
// app.get('/contact', (req, res) => {
//   res.end('<h1>Contacts</h1>')
// })


// // начинаем прослушивать подключения на 3000 порту
// app.listen(3000)

/////////////////////////////////////////////////////////

// const express = require('express')
// const app = express()

// app.get('/',(req, res)=> {
//   res.write('<h1>This</h1>')
// })

// app.use(function (request, response) {
//   response.send({id:6, name: "Tom"});
// })

// app.use((req, res) => {
//   res.send(['Tom', 'Bob', 'Sam'])
// })
// app.listen(3000)
///////////////////////////////////////////

// const express = require('express')
// const app = express()
// app.get('/', (req, res) => {
//   res.end('<h1>Start</h1>')
// })

// app.use('/home/bar',(req, res) => {
//   res.sendStatus(404)
// })

// app.use('/home/tent', (req, res) => {
//   res.send('<h1>Start 2 </h1>')
// })

// app.use('/homes', (req, res) => {
//   res.send(['Tom', 'Sam'])
// })

// app.use(express.static(__dirname+ '/public'))
// app.use("/pub", function(request, response){
     
//   response.send("<h1>Главная страница</h1>");
// });
// app.listen(3000)
///////////////////////////////////////////////////

// const express = require('express')
// const app = express()

// app.use('/home', (req, res) => {
//   res.redirect('about')
// })
// app.use('/about', (req, res) => {
//   res.send('<h1>This is about</h1>')
// })
// app.listen(3000)

/////////////////////////////////////////////////////////

const express = require('express')
const app = express()
const prodRouter = express.Router()

prodRouter.use('/create', (req, res) => {
  res.send('Добавление товара')
})
prodRouter.use('/:id', (req, res) => {
  res.send(`Товар ${req.params.id}`)
})
prodRouter.use('/', (req, res) => {
  res.send('Список товара')
})
app.use('/product', prodRouter)
app.use('/about', (req, res) => {
  res.send('О сайте')
})
app.use('/', (req, res) => {
  res.send('Главная страница')
})
app.listen(3000)



///////////////////////////////////////////////////////////////