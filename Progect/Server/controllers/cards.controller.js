const db = require('../models');
const Card = db.cards;
const Products = db.product;

exports.getAll = (req, res) => { 
    Card.findAll({raw:true}).then((cards)=>{
        console.log(cards);
        res.send(cards); 
    }).catch(err=>console.log(err));
}

exports.createCards = (req, res) => { 
    console.log("CREATE!!!----------------------------CARD");
    console.log(req.body.product.userId);
    const card = {
        UserId: req.body.product.userId,
        ProductId: req.body.product.productId
      };
    Card.create(card).then((cards)=>{
        res.send(cards)
    }).catch(err=>console.log(err));
}
exports.deleteCards = (req,res) => { 
    console.log("DELETE!!!----------------------------CARD");
    console.log(req.body);
    Card.destroy({
        where: {
            id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}

exports.getById = (req, res) => { 
    const userId = req.params.userId
    Card.findAll({
        where:{
            userId: userId
        }
    }).then((cards)=>{
        console.log(cards);
        res.send(cards); 
    }).catch(err=>console.log(err));
}


exports.getOne = (req, res) => { 
    console.log(req.body);
    Card.findOne({
        where: {
            UserId: req.body.cardParams.userId, 
            ProductId: req.body.cardParams.productId
        }
    }).then((cards)=>{
        console.log(cards);
        res.send(cards); 
    }).catch(err=>console.log(err));
}