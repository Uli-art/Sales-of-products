const db = require('../models');
const User = db.users;

exports.GetUserByPhone = (req, res) => { //SELECT * FROM users;
    console.log("Get User By Phone");
    const phoneNumber = req.params.PhoneNumber
    User.findOne({
        where: {
            PhoneNumber: phoneNumber
        }
    }).then((user)=>{
        console.log(res.json(user));
        res.send(res.json(user)); 
    }).catch(err=>console.log(err));
}