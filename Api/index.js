require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const productRoute=require('./routes/product.route')
const cartRoute=require('./routes/cart.route')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},
    function (err, db) {
     if(err) console.log(err);
     else console.log("Connect is successfull")
  });
  
  
  let port=process.env.PORT || 3000
  
  const app = express()
  
  app.use('/', express.static('public'))
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/product', productRoute)
  app.use('/cart',cartRoute)

  
  const server=app.listen(port,function(){console.log("Sever is start in port "+port);})
