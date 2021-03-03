
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// создаем парсер для данных application/x-www-form-urlencoded

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/register',urlencodedParser,(req, res) =>{
  res.sendFile(__dirname+'register.html')
})
app.post('/register', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  res.send(`${req.body.userName} - ${req.body.userAge}`)
})
app.get('/', (req, res) => {
  res.send('Главная страница')
})
app.listen(3000)
