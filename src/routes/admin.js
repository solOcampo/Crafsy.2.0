const {list,create,edit,store,update,destroy} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/list', list);

/* Creando un producto */
router.get('/create', create);
router.post('/create',store)

router.get('/edit/:id', edit);
router.put('/edit/:id', update);

router.delete('/destroy/:id', destroy);

module.exports = router;
