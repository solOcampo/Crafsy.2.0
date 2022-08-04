const {list,create,edit} = require('../controllers/adminController')
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/list', list);
router.get('/create', create);
router.get('/edit/:id', edit);

module.exports = router;
