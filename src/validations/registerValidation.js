const {check} = require('express-validator')

module.exports = [
    /* Nombre */
    check('name').trim()
    .notEmpty().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:2}).withMessage('Debe contener al menos 2 caracteres'),
    /* Email */
    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un email valido'),
    /* Contraseña */
    check('pass')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    check('pass2')
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),
    /* Pais */
    check('pais')
    .notEmpty().withMessage('Debe ingresar su Pais'),
    /* Genero */
    check('Genero')
    .notEmpty().withMessage('Debe ingresar su Genero'),
    /* Comentarios */
    check('comentarios')
    .notEmpty().withMessage('Debe ingresar su email')
    .isLength({min:10}).withMessage('Debe contener al menos 10 caracteres'),,
    /* terminos */
    check('terminos')
    .notEmpty().withMessage('Debe Aceptar nuestros terminos y condiciones')
]
