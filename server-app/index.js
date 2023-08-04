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
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });


app.get("/",(req,res)=>{
  res.send("hello world");
});

app.listen(8000,function(err){
  if(err) console.log(err)
  console.log("server running on 8000 port");
});