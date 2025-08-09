const express = require('express');
const app = express();

const user_route = express.Router();
const product_route = express.Router();

user_route.get('/', (req,res)=>{
    res.status(200).send('<h1>User route accessd</h1>');
})
user_route.get('/:id', (req,res)=>{
    const id = req.params.id;
    res.status(200).send(`<h1>User ${id} route accessd</h1>`);
})
product_route.get('/', (req,res)=>{
    res.status(200).send('<h1>Product route accessd</h1>');
})
product_route.get('/:id', (req,res)=>{
    const id = req.params.id;
    res.status(200).send(`<h1>Product Id:${id}  accessed</h1>`);
})

app.use('/user',user_route);
app.use('/product',product_route);

app.listen(3000, (req,res)=>{
    console.log('server is listening at port 3000');
})