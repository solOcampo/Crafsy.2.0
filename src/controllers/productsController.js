let productos = require('../data/productos.json')

module.exports = {
    detail : (req,res) => {
        let id = +req.params.id
        let productoEnDetalle = productos.find((producto) => producto.id === id)
        return res.render('detail',{
            producto : productoEnDetalle,
            productos
        })
    },
    cart: (req,res) => {
        res.render('cart')
    },
    categoria : (req,res) => {
        let categoriaSeleccionada = req.params.categoria
        let categorias = ['Smartphones','Tablets','Notebooks']
        
        productoPorCategoria = productos.filter(producto => producto.categorias === categoriaSeleccionada)

        res.render('productos',{
            categorias,
            categoriaSeleccionada,
            productos,
            productoPorCategoria
        })
    },
}