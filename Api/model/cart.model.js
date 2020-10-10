const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
                productID:String,
                name: String,
                price: Number,
                img: String,
                count:Number,
                size: String,
                color: String,
                createDate: { type: Date, default: Date.now }
        
});
const Cart = mongoose.model('Cart', cartSchema,'carts');
module.exports=Cart;