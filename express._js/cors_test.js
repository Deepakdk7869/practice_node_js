const express = require('express');
const cors = require('cors')
const app = express();
// app.use(cors());
let obj = {
    port : 3000,
    clientName : 'client'
}
allowedOrigins = [
    'http://localhost:1234/',
    'http://localhost:4000/',
    'http://localhost:4200/',
    "http://localhost:52330",
]
const corsConfig = {
    origin : function(origin, callback){
        console.log(origin);
        if(!origin) return callback(null, true);
        if(allowedOrigins.includes(origin)){
            return callback(null, true);
        }else{
            return callback(new Error('Domain not allowed to request'));
        }
    },
    optionsSuccessStatus: 200 
}
app.get('/',(req,res)=>{
    console.log('route access successfully');
    res.status(200).send("route access successfully");
})
app.get('/getDetails',cors(corsConfig),(req,res)=>{
    console.log('route access successfully');
    res.status(200).send(obj);
})

app.listen(3000,()=>{
    console.log('server listen at port 3000');
})