const Cart = require('../model/cart.model')

module.exports.index=async (req,res)=>{
    const carts = await Cart.find();
    res.json(carts)
}

module.exports.addCart = async (req, res) => {
    const cartItem=await Cart.find()
    const cart=await Cart.findOne({'cart.productID':req.body.productID})

    if(cartItem.length>0)
    {
       if(cart){
           let count=cart.cart.count+Number(req.body.count)
            await Cart.updateMany({'cart.productID':req.body.productID},{'cart.count':count})
            res.json("Đặt hàng thành công");
       }
       else{
           await Cart.create({cart:req.body})
            res.json("Đặt hàng thành công");
       }
    }
    else{
        await Cart.create({cart:req.body})
        res.json("Đặt hàng thành công");
    }
}