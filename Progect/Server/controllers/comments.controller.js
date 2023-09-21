const db = require('../models');
const Comments = db.comments;

exports.getAll = (req, res) => { 
    Comments.findAll({raw:true}).then((comments)=>{
        console.log(comments);
        res.send(comments); 
    }).catch(err=>console.log(err));
    
}
exports.createComments = (req, res) => { 
    console.log(req.body);
    const comment = req.body;
    Comments.create(comment).then((comments)=>{
        res.send(comments)
    }).catch(err=>console.log(err));
}
exports.deleteComments = (req,res) => { 
    const id = +req.params.id
    Comments.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
