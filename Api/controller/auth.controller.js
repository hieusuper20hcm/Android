const md5 = require('md5')
const User=require('../model/user.model')

module.exports.login=async function(req,res,next){
    let email=req.body.email;
    const password=req.body.password;
    console.log(email);
    const user= await User.findOne({email:email});
     if(!user){
         res.json(["Email does not exist",{email:email}])
         return;
     }
     if(md5(password)!=user.password){
        res.json({errors:"Password is wrong"})
         return;
     }
     res.json("Đăng nhập thành công")
}