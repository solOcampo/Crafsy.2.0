const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
    , JSON.stringify(dato, null, 4), 'utf-8')
const guardarHistorial = (dato) => fs.writeFileSync(path.join(__dirname, '../data/historial.json')
    , JSON.stringify(dato, null, 4), 'utf-8')

module.exports = {
    login: (req,res) => {
        return res.render('users/login')
    },
    processLogin:(req,res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            return res.send(req.body)
        } else {
            /* return res.send(errors.mapped()) */
            return res.render('users/login', {
                errors: errors.mapped(),
                old: req.body
            })
        }
        
    },
    register:(req,res) => {
        return res.render('users/register')
    },
    processRegister:(req,res) => {
        let errors = validationResult(req)
        if (req.fileValidationError) {
            let imagen = {
                param: 'imagen',
                msg: req.fileValidationError,
            }
            errors.errors.push(imagen)
        }
        if (errors.isEmpty()) {
            return res.send(req.body)
        } else {
            /* return res.send(errors.mapped()) */
            return res.render('users/register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
        
    },
}