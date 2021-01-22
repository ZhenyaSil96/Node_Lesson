const {Router} = require('express') // это наверное можно было так написать еще 
                                    // const express.Router = require('express')
const router = Router()
router.get('/', (req, res) => {
    res.render('index', {
        title:'Главная страница',
        isHome: true
      })
})



module.exports = router
