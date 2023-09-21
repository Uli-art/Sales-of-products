const db = require('../models');
const Categorie = db.categories;

exports.getAll = (req, res) => { 
    Categorie.findAll({raw:true}).then((categories)=>{
        console.log(categories);
        res.send(categories); 
    }).catch(err=>console.log(err));
    
}
exports.createCategories = (req, res) => {
    console.log(req.body);
    const categorie = req.body;
    Categorie.create(categorie).then((categories)=>{
        res.send(categories)
    }).catch(err=>console.log(err));
}
exports.deleteCategories = (req,res) => {
    const id = +req.params.id
    Categorie.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
