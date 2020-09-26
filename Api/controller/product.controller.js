const Product = require('../model/product.model')

module.exports.index = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}
