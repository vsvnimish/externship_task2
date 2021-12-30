const express=require('express');
const app=express();
const bodyParser = require('body-parser')
app.listen(3000);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));