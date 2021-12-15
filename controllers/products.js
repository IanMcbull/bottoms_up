const express = require("express");
const productsroute = express.Router();
const Products = require("../models/productsmodel");
require("./mongoose");
productsroute.route("/").get((req, res) => {
  if (Object.keys(req.query).length === 0) {
    Products.find({})
      .then((products) => {
        res.send(products);
      })
      .catch((err) => {
        res.send("Unable to fetch the data");
      });
  } else {
    Products.find({ name: req.query.name })
      .then((products) => {
        res.send(products);
      })
      .catch((err) => {
        res.send("Unable to fetch the data");
      });
  }
});

productsroute.route('/add').post((req,res)=>{
  const {name,quantity,price,type} = req.body
  const product = new Products({name,quantity,price,type});
  product.save().then(data=>{
    res.send(data)
  }).catch(err=>{
    res.send(err)
  })
})
productsroute.route('/').put((req,res)=>{
  const { name,price } = req.query;
  Products.findOneAndUpdate({name},{price}).then(data=>{
    if(data=== null){
      res.send({message:'Product not found'})
    }else{
      console.log(data);
      res.send({message:'Product updated'})
    }
  }).catch(err=>{
     res.send(err);
  })
})
productsroute.route('/').delete((req,res)=>{
   Products.findOneAndDelete({name:req.query.name}).then(data=>{
    if(data === null){
       res.send({message:'Product not found'})
     }else{
      res.send({message:'Product Deleted'});
     } 
   }).catch(err=>{
    res.send(err);
   })
})

module.exports = productsroute;
