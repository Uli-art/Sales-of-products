const db = require('../models');
const Rating = db.rating;

exports.getAll = (req, res) => { 
    Rating.findAll({raw:true}).then((ratings)=>{
        console.log(ratings);
        res.send(ratings); 
    }).catch(err=>console.log(err));
    
}
exports.createRating = (req, res) => {
    console.log(req.body);
    const rating = req.body;
    Rating.create(rating).then((ratings)=>{
        res.send(ratings)
    }).catch(err=>console.log(err));
}
exports.deleteRating = (req,res) => {
    const id = +req.params.id
    Rating.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
