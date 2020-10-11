const Cart = require('../model/cart.model')

module.exports.index=async (req,res)=>{
    const carts = await Cart.find();
    res.json(carts)
}

module.exports.addCart = async (req, res) => {
    const cartItem=await Cart.find({userID:req.body.userID});
    const query=[{'cart.productID':req.body.cart.productID},
                {'cart.size':req.body.cart.size},{'cart.color':req.body.cart.color},
                {userID:req.body.userID}];
    const cart=await Cart.findOne({$and:query});
    if(cartItem.length>0)
    {
       if(cart){
           let count=cart.cart.count+req.body.cart.count
            await Cart.updateMany({'cart.productID':req.body.cart.productID},{'cart.count':count})
            res.json("Đặt hàng thành công");
       }
       else{
            await Cart.create({
                userID:  req.body.userID,
                cart: req.body.cart
            })
            res.json("Đặt hàng thành công");
       }
    }
    else{
        await Cart.create({
            userID:  req.body.userID,
            cart: req.body.cart
        })
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
