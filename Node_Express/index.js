const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
//const helmet = require('helmet')
//const compression = require('compression')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const ordersRoutes = require('./routes/orders')
const addRoutes = require('./routes/add')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const coursesRoutes = require('./routes/courses')
const User = require('./models/user')
const varMiddleware = require('./middleware/variables')
const userMiddleware = require('./middleware/user')
const keys = require('./keys')
const errorHandler = require('./middleware/error')

//const MONGODB_URI = `mongodb+srv://Yevhenii:69jYDFauqgXAMDN@cluster0.j89wu.mongodb.net/shop`

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

const store = new MongoStore({
  collection:'session',
  uri: keys.MONGODB_URI
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: keys.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store:store
}))

//app.use(helmet())
//app.use(compression())
app.use(varMiddleware)
app.use(userMiddleware)

app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/card', cardRoutes)
app.use('/orders', ordersRoutes)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

async function start () {
  try{
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }) 
  
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  }catch(e){
    console.log(e)
  }
}
start()

//const password = '69jYDFauqgXAMDN'