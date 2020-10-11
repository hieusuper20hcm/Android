const Cart = require('../model/cart.model')

module.exports.index=async (req,res)=>{
    const carts = await Cart.find();
    res.json(carts)
}

module.exports.addCart = async (req, res) => {
    const cartItem=await Cart.find({userID:req.body.userID});
    const query=[{productID:req.body.productID},
                {size:req.body.size},{color:req.body.color},
                {userID:req.body.userID}];
    const cart=await Cart.findOne({$and:query});
    if(cartItem.length>0)
    {
       if(cart){
           let count=cart.count+req.body.count
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
    const query=[{_id:req.body.id},{userID:req.body.userID}];
    await Cart.deleteOne({$and:query},(err) => {
        if (err){
            console.log(err);
            return;
        }     
    })
    res.json("Xóa hàng thành công")
}
