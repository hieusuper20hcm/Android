require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const productRoute=require('./routes/product.route')
const cartRoute=require('./routes/cart.route')
const authRoute=require('./routes/auth.route')
const userRoute=require('./routes/user.route')

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
  app.use('/login',authRoute)
  app.use('/user',userRoute)

  
  const server=app.listen(port,function(){console.log("Sever is start in port "+port);})
