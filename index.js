const express = require('express'); // npm i express [if ubuntu,linux,mac..] => sudo
//nodemon => keep running => npm i -g nodemon
const bodyParser = require('body-parser'); //npm i body-parser
const mongoose = require('mongoose') //npm i mongoose
const cors = require('cors') //npm i cors
require('dotenv').config();
const port = process.env.SERVER_PORT; //npm i dotenv
const base_url = process.env.BASE_URL; //npm i dotenv

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

//==================================
const customerRoute = require('./route/customerRoute')
const userRoute = require('./route/userRoute')
const productRoute = require('./route/productRoute')
const orderRoute = require('./route/orderRoute')
//==================================

mongoose.connect('mongodb://0.0.0.0:27017/ebill').then(()=>{
    app.listen(port,()=>{
        console.log(`server is running and up on port ${port}`);
    });
}).catch(err=>{
    console.log(err);
})

app.post('/customer',(req, res)=>{
    console.log(req.body);
    res.end('Hello!')
});
//===================================
app.use(base_url+'customer',customerRoute); //http://localhost:3000/api/v1/customer/save
app.use(base_url+'user',userRoute); //http://localhost:3000/api/v1/user/signup
app.use(base_url+'product',productRoute); //http://localhost:3000/api/v1/product/save
app.use(base_url+'order',orderRoute); //http://localhost:3000/api/v1/order/save
//===================================