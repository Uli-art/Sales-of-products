const db = require('../models');
const Statusesofproduct = db.statusesofproduct;

exports.getAll = (req, res) => { 
    Statusesofproduct.findAll({raw:true}).then((statuses)=>{
        console.log(statuses);
        res.send(statuses); 
    }).catch(err=>console.log(err));
}

exports.createStatusesofproduct = (req, res) => {
    console.log(req.body);
    const status = req.body;
    Statusesofproduct.create(status).then((statuses)=>{
        res.send(statuses)
    }).catch(err=>console.log(err));
}

exports.deleteStatusesofproduct = (req,res) => {
    const id = +req.params.id
    Statusesofproduct.destroy({
        where: {
         id: id
        }
      }).then(() => {
        res.send('DELETED');
      });
}
