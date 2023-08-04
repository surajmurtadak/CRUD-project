require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const url = process.env.MONGO_PATH;

mongoose.connect(url,{useNewUrlParser:true});

mongoose.connection.on('connected',()=>{
  console.log("connected to db");
});

const productSchema = new mongoose.Schema({ 
  productName : { type: String,
                  required: true,
                  unique: true
                },
  description : { type: String,
                  required: true
                },
  price : { type: Number,
            required: true
          },
});

const productCol = mongoose.model("productCollection",productSchema);

////////// get all product list ///////////

app.get("/",async(req,res)=>{
  const data = await productCol.find({});
  res.send(data);
});

///////// post product in mongoDB /////////

app.post("/post",async(req,res)=>{

  const product1 = new productCol({
    productName : req.body.productName,
    description : req.body.description,
    price : req.body.price
  });

  try{
    await product1.save();
    res.send(req.body);
  } 
  catch(err){
    res.status(500).json({err });
  }  
});

////////// find one product ///////////

app.get('/product/:name', async (req, res) => {
  try {
    const name = req.params.name;

    // Find a user with the provided name
    const product = await productCol.findOne({ productName:name });
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } 
  catch (err) {
      res.status(500).json({ error: 'Failed to fetch Product' });
  }
});

//////// update product ////////////

app.put('/product/:name', async (req, res) => {
  try {
    const pName = req.params.name;
    const updates = req.body;

    // Find the product by its unique identifier and update it.
    const updatedProduct = await productCol.findOneAndUpdate(
      { productName: pName },
      updates,
      { new: true } // Set new: true to return the updated product
    );

    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

////// delete product ///////

app.delete('/product/:name', async (req, res) => {
  try {
    const pName = req.params.name;

    // Find the product by its unique identifier and delete it
    const deletedProduct = await productCol.findOneAndDelete({ productName: pName });

    if (deletedProduct) {
      res.json(deletedProduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

//////// assigning port number to server ////////
app.listen(8000,function(err){
  if(err) console.log(err)
  console.log("server running on 8000 port");
});