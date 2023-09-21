const db = require('../models');
const Statusesoforder = db.statusesoforder;

exports.getAll = (req, res) => { 
    Statusesoforder.findAll({raw:true}).then((statuses)=>{
        console.log(statuses);
        res.send(statuses); 
    }).catch(err=>console.log(err));
    
}
exports.createStatusesoforder = (req, res) => {
    console.log(req.body);
    const status = req.body;
    Statusesoforder.create(status).then((statuses)=>{
        res.send(statuses)
    }).catch(err=>console.log(err));
}
exports.deleteStatusesoforder = (req,res) => {
    const id = +req.params.id
    Statusesoforder.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
