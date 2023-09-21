const db = require('../models');
const Product = db.product;

exports.GetProductByName = (req, res) => {
    console.log("Get product By name");
    const name = req.params.Name
    Product.findOne({
        where: {
            Name: name
        }
    }).then((product)=>{
        console.log(res.json(product));
        res.send(res.json(product)); 
    }).catch(err=>console.log(err));
}