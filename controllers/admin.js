const Product = require('../models/product');

exports.getProducts = (req,res,next) =>{
    Product.findAll()
        .then(products => {
            res.json(products)
        })
        .catch(err => console.log(err))
}

exports.addProduct = (req,res,next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const category = req.body.category;
    const data = Product.create({
        title:title,
        price:price,
        description:description,
        category:category
    })
    .then(result => {
        res.json(result);
    })
}

exports.deleteProduct = (req,res,next) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then(product => {
            if(!product){
                console.log("product not found");
            }else{
                return product.destroy();
            }
        })
        .then(result => {
            console.log("product deleted");
            res.redirect('/')
        })
        .catch(err => console.log(err))
}
