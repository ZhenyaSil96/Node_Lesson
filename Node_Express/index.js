 const express = require('express')
 const path = require('path')
 const app = express() //app будет являтся аналогом сервера
 const exphbs = require('express-handlebars')
 const homeRoutes = require('./routes/home') 
 const addRoutes = require('./routes/add')
 const coursesRoutes = require('./routes/courses')


const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
//Регистрируем hbs в рендеринге html страницах
app.engine('hbs', hbs.engine) //Регистрируем в express что есть такой движок 
app.set('view engine', 'hbs') // Начинаем использовать
app.set('views', 'views') //Тут хранятся шаблоны

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/',homeRoutes)
app.use('/add',addRoutes)
app.use('/courses',coursesRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT ,() => {
    console.log(`Server is running on port ${PORT}`)
})



