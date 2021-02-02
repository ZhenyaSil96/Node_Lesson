const {Router} = require('express')
const { model } = require('mongoose')
const router = Router()

router.get('/login', async(req, res) => {
  res.render('auth/login', {
      title: 'Авторизация',
      isLogin: true
  })
})

module.exports = router