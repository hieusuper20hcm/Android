require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
// const cors=require('cors');
const socket=require('socket.io')

const mongoose = require('mongoose')
const productRoute=require('./routes/product.route')
const cartRoute=require('./routes/cart.route')
const authRoute=require('./routes/auth.route')
const userRoute=require('./routes/user.route')
const historyRoute=require('./routes/history.route')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},
    function (err, db) {
     if(err) console.log(err);
     else console.log("Connect is successfull")
  });
  
  
  let port=process.env.PORT || 3000
  
  const app = express()
  // app.use(cors({credentials:true,origin:"http://192.168.11.133:5000"}))
  app.use('/', express.static('public'))
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/product', productRoute)
  app.use('/cart',cartRoute)
  app.use('/login',authRoute)
  app.use('/user',userRoute)
  app.use('/history',historyRoute)

  const server=app.listen(port, () => {
      console.log('server running at ' + port)
    })
  socket(server).on('connection',function(socket){
      console.log(`Có người vừa kết nối, socketID: ${socket.id}`)
      socket.on('join', function(userNickname) {

        console.log(userNickname +" : has joined the chat "  )
    });
  })