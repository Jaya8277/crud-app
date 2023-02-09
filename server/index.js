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


app.delete("/deleteuser/:id",async(req,res)=>{

    try{
        const {id}=req.params;
const deleteuser=await userPost.findByIdAndDelete({_id:id})
console.log(deleteuser);
// res.status(201).json(deleteuser)
res.status(200).send({
    success:true,
    message:"Data Deleted Succefully"
})
    }
    catch(error){
        res.status(404).json(error)
    }
})



app.put("/updateuser/:id",async(req,res)=>{

    try{
        const {id}=req.params;
const updateuser=await userPost.findByIdAndUpdate(id,req.body,{
    new:true
})
// console.log(updateuser);
res.status(200).send({
    success:true,
    message:"Data Successfully Updated"
})
    }
    catch(error){
        res.status(404).send({
            success:false,
            message:"Something error Occured"
        })
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



