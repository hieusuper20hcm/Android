const md5 = require('md5')
const User=require('../model/user.model')

module.exports.login=async function(req,res,next){
    let email=req.body.email;
    const password=req.body.password;
    console.log(email);
    const user= await User.findOne({email:email});
     if(!user){
         res.json("email khong ton tai")
         return;
     }
     if(md5(password)!=user.password){
        res.json("mat khau sai")
         return;
     }
     res.json("dang nhap thanh cong")
}
