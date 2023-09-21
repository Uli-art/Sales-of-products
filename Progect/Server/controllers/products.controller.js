const db = require('../models');
const Product = db.product;

exports.getAll = (req, res) => { 
    Product.findAll({raw:true}).then((products)=>{
        console.log("Get all method");
        console.log(products);
        res.send(products); 
    }).catch(err=>console.log(err));
}
exports.createProducts = (req, res) => {
    console.log(req.body);
    const product = req.body;
    Product.create(product).then((products)=>{
        res.send(products)
    }).catch(err=>console.log(err));
}
exports.deleteProducts = (req,res) => {
    const id = +req.params.id
    Product.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}

exports.getById = (req, res) => { 
    const productId = req.params.productId
    Product.findAll({
        where:{
            id: productId
        }
    }).then((products)=>{
        console.log("Get by id method");
        console.log(products);
        res.send(products); 
    }).catch(err=>console.log(err));
    
}