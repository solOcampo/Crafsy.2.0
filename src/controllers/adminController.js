let productos = require('../data/productos.json')


module.exports = {
    list: (req,res) => {
        return res.render('admin/listaProductos',{
            productos
        })
    },
    create:(req,res) => {
        return res.render('admin/crearProducto')
    },
    edit:(req,res) => {
        return res.render('admin/editarProducto')
    },
}