 const express = require('express')
 const path = require('path')
 const app = express() //app будет являтся аналогом сервера
 const exphbs = require('express-handlebars')
// //const { mainModule } = require('process')


const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
//Регистрируем hbs в рендеринге html страницах
app.engine('hbs', hbs.engine) //Регистрируем в express что есть такой движок 
app.set('view engine', 'hbs') // Начинаем использовать
app.set('views', 'views') //Тут хранятся шаблоны

// Обработать GET запрос
app.get('/', (req, res) => {
  //res.status(200)
  res.render('index')
  //res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res)=> {
    //res.status(200)
    res.render('about')
   // res.sendFile(path.join(__dirname, 'views', 'about.html'))
})



const PORT = process.env.PORT || 3000

app.listen(PORT ,() => {
    console.log(`Server is running on port ${PORT}`)
})



