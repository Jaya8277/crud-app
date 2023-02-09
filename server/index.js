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

app.post("/create",async(req,res)=> {
    const {name,age,city,email} = req.body;

    const data = await userPost.create({
        name,
        age,
        city,
        email
    })
    return res.status(200).json(data);
})

app.get("/view",async(req,res)=> {
    try{
        const data= await userPost.find({})
        return res.status(200).json(data)
    }catch(err) {
        console.log(err);
    }
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



