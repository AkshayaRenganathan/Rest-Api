const express=require('express');
const app =express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routesBook =require('./src/routes/Books.routes');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use('/books', routesBook)

mongoose.connect(process.env.DB_KEY);
mongoose.connection.once('open',()=>{
   console.log("Connected to mongodb");
}).on('error',(err)=>{
   console.log('Not Connected to Mongodb',err);
})

app.listen(port,()=>{
   console.log(`Server is listening at port ${port}`)
})

