
module.exports = {
    home : (req,res) => {
        return res.render('index', 
        { 
            title: 'La comision 17 es la mejor',
            mensaje: 'Aca estamos aprendiendo controladores'
        });
    }
}
