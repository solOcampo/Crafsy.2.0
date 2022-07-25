

module.exports = {
    detail : (req,res) => {

        let id = +req.params.id
        let productoEspecial = req.params.especial

        if (id === 2 && productoEspecial === "nuevo") {
            return res.render('detailEspecial')
        }else if(id === 2){
            return res.render('detail2')
        }else{
            return res.render('detail')
        }
        
    },
    cart: (req,res) => {
        res.render('cart')
    },
}