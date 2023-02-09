require("dotenv").config()
const express = require('express')
const connection = require("./config")
const app = express();
const userPost = require('./model/userPost');
const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=> {
    res.send("Home Page");
})




const PORT = process.env.PORT || 8080

app.listen(PORT,(connection)=> {
    try{
        connection
        console.log("database connected succesfully");
    }catch(err){
        console.log(err)
    }
    console.log("successfully sever running on 8080")
})



