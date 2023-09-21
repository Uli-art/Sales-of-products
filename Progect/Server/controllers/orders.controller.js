const db = require('../models');
const Order = db.order;

exports.getAll = (req, res) => { 
    Order.findAll({raw:true}).then((orders)=>{
        console.log(orders);
        res.send(orders); 
    }).catch(err=>console.log(err));
    
}
exports.createOrder = (req, res) => { 
    console.log(req.body);
    const order = req.body;
    Order.create(order).then((orders)=>{
        res.send(orders)
    }).catch(err=>console.log(err));
}
exports.deleteOrder = (req,res) => { 
    const id = +req.params.id
    Order.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
