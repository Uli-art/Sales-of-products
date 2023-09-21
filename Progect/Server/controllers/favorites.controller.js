const db = require('../models');
const Favorites = db.favorites;

exports.getAll = (req, res) => { 
    Favorites.findAll({raw:true}).then((favorites)=>{
        console.log(favorites);
        res.send(favorites); 
    }).catch(err=>console.log(err));
    
}
exports.createFavorites = (req, res) => { 
    console.log(req.body);
    const favorite = req.body;
    Favorites.create(favorite).then((favorites)=>{
        res.send(favorites)
    }).catch(err=>console.log(err));
}
exports.deleteFavorites = (req,res) => { 
    const id = +req.params.id
    Favorites.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
