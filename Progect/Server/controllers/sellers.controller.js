const db = require('../models');
const Sellers = db.sellers;

exports.getAll = (req, res) => { 
    Sellers.findAll({raw:true}).then((sellers)=>{
        console.log(sellers);
        res.send(sellers); 
    }).catch(err=>console.log(err));
    
}
exports.createSellers = (req, res) => {
    console.log(req.body);
    const seller = req.body;
    Sellers.create(seller).then((sellers)=>{
        res.send(sellers)
    }).catch(err=>console.log(err));
}
exports.deleteSellers = (req,res) => {
    const id = +req.params.id
    Sellers.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
