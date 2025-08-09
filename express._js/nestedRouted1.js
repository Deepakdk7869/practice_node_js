const express = require('express');
const router = express.Router();
const productCategory = express.Router({mergeParams : true});
const itemrouter = express.Router({mergeParams : true});

router.get('/',(req,res)=>{
   
    res.status(200).send('Home route access successfully');
})
router.get('/:id',(req,res)=>{
    res.status(200).send('Home route access successfully');
})
productCategory.get('/',(req,res)=>{
     console.log(req.params);
     res.status(200).send('product route access successfully');
})
productCategory.get('/:productCategory',(req,res)=>{
    let category = req.params.productCategory
     res.status(200).send(`product ${category} category access successfully`);
})
itemrouter.get('/',(req,res)=>{
     res.status(200).send('items route access successfully');
})
itemrouter.get('/:id',(req,res)=>{
     res.status(200).send('items route access successfully');
})
router.use('/product' , productCategory);
router.use('/:id/product', productCategory); 
router.use('/item' , itemrouter);
router.use('/:id/item', productCategory); 
module.exports = router;
