const express = require('express');
const {login,register, processRegister, processLogin} = require('../controllers/usersController')
const router = express.Router();

const registerValidator = require('../validations/registerValidation')
const loginValidator = require('../validations/loginValidation')
const upload = require('../middlewares/multerUsuarios')

/* GET users listing. */
router.get('/register', register);
router.post('/register',upload.single('image'),registerValidator,processRegister)

router.get('/login', login);
router.post('/login',loginValidator,processLogin)

module.exports = router;
