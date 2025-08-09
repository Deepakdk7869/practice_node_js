const express = require('express');
const app = express();

const home = app.use('/home', require('./nestedRouted1'));

app.listen(3000, ()=>{console.log('app listening at 3000')});

