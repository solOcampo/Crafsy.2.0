const express = require('express')
const router = express.Router()
const {detail,cart} = require('../controllers/productsController')

router.get('/detail/:id/:especial?',detail)
router.get('/cart',cart)

module.exports = router;