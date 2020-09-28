const Cart = require('../model/cart.model')

module.exports.index=async (req,res)=>{
    const carts = await Cart.find();
    res.json()
}

module.exports.addCart = async (req, res) => {
    const cartItem=await Cart.find()
    const cart=await Cart.findOne({productID:req.body.productID})

    if(cartItem.length>0)
    {
       if(cart){
           let count=cart.count+Number(req.body.count)
            await Cart.updateMany({productID:req.body.productID},{count:count})
            res.json("Đặt hàng thành công");
       }
       else{
           await Cart.create(req.body)
            res.json("Đặt hàng thành công");
       }
    }
    else{
        await Cart.create(req.body)
        res.json("Đặt hàng thành công");
    }
}

module.exports.deleteCart= async function(req,res){
    //const query=[{'cart.productID':req.params.productID},{userId:req.signedCookies.userID}];
    await Cart.deleteOne({productID:req.body.productID},(err) => {
        if (err){
            console.log(err);
            return;
        }     
    })
    res.json("Xóa hàng thành công")
}
