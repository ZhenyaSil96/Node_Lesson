const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const session = require('express-session')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const ordersRoutes = require('./routes/orders')
const addRoutes = require('./routes/add')
const authRoutes = require('./routes/auth')
const coursesRoutes = require('./routes/courses')
const User = require('./models/user')
const varMiddleware = require('./middleware/variables')



const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(async (req, res, next) => {
   try{
     const user = await User.findById('60116d4d1e3b9e0df019eae1')
     req.user = user
     next()
   }catch(e){
     console.log(e)
   }
})

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false
}))

app.use(varMiddleware)

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)
app.use('/orders', ordersRoutes)
app.use('/auth', authRoutes)

const PORT = process.env.PORT || 3000

async function start () {
  try{
    const url = `mongodb+srv://Yevhenii:69jYDFauqgXAMDN@cluster0.j89wu.mongodb.net/shop`
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }) 
    const candidate = await User.findOne() 
    if(!candidate){
      const user = new User({
        email: 'yevhenii@gmail.com',
        name: 'Yevhenii',
        cart: {items: []}
      }) 
      await user.save()
    }
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }catch(e){
    console.log(e)
  }
}
start()

//const password = '69jYDFauqgXAMDN'



