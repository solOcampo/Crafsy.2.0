const {list,create,edit,store} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/list', list);

/* Creando un producto */
router.get('/create', create);
router.post('/create',store)

router.get('/edit/:id', edit);

module.exports = router;
