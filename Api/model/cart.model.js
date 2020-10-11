const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
                userID: String,
                productID:String,
                name: String,
                price: Number,
                img: String,
                count:Number,
                size: String,
                color: String           
});
const Cart = mongoose.model('Cart', cartSchema,'carts');
module.exports=Cart;