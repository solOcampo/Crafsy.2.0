const fs = require('fs')
const path = require('path')
const productos = require('../data/productos.json')
const guardar = (dato) => fs.writeFileSync(path.join(__dirname, '../data/productos.json')
,JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    list: (req,res) => {
        return res.render('admin/listaProductos',{
            productos
        })
    },
    create:(req,res) => {
        return res.render('admin/crearProducto')
    },
    store:(req,res) => {
        let {Marca,Titulo,Categoria,Precio,Descuento,Stock,Descripcion} = req.body
        
        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            marca:Marca,
            titulo:Titulo,
            categorias:Categoria,
            precio:Precio,
            descuento:Descuento,
            stock:Stock,
            descripcion:Descripcion,
            imagenes: [
                "default-image.png",
                "default-image.png",
                "default-image.png",
                "default-image.png"
            ],
        }

        productos.push(productoNuevo)
        guardar(productos)

        res.redirect('/admin/list')
    },
    edit:(req,res) => {
        id = +req.params.id
        let producto = productos.find((elemento) => {
            return elemento.id == id
        })
        /* return res.send(producto) Comprobar que esta llegando bien el elemento*/
        return res.render('admin/editarProducto',{
            producto
        })
    },
    update:(req,res) => {

    },
    destroy:(req,res) => {

    },
}