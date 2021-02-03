const {Router} = require('express')
// const { model } = require('mongoose')
const router = Router()
const User = require('../models/user') 

router.get('/login', async(req, res) => {
  res.render('auth/login', {
      title: 'Авторизация',
      isLogin: true
  })
})

router.get('/logout', async(req, res) => {
   // req.session.isAuthenticated = false
    req.session.destroy(() => {
        res.redirect('/auth/login#login')
    })
   
  })

router.post('/login', async(req, res) => {
  try{
   const {email, password} = req.body
   const candidate = await User.findOne({email})

   if(candidate) {
      const areSame = password === candidate.password

      if(areSame) {
        const user = candidate             //await User.findById('60116d4d1e3b9e0df019eae1')
        req.session.user = user
        req.session.isAuthenticated = true
        req.session.save(err =>{
            if(err){
                throw err
            }
            res.redirect('/')
        })
      }else{
        res.redirect('/auth/login#login')
      }
   }else {
      res.redirect('/auth/login#login')
   }
  }catch(e){
    console.log(e)
  }
})

router.post('/register', async (req, res) => {
  try{
    const {email, password, repaet, name} = req.body
    const candidate = await User.findOne({email})

    if(candidate) {
       res.redirect('/auth/login#register')
    }else{
      const user = new User({
        email, name, password, cart:{items: []}
      })
      await user.save()
      res.redirect('/auth/login#login')
    }
  }catch(e){
    console.log(e)
  }
})
module.exports = router