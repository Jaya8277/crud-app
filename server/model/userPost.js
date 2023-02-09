const mongoose = require('mongoose');

const userpostSchema = new mongoose.Schema({

   name:String,
   age:Number,
   email:String,
   city:String,

})

module.exports= mongoose.model("userdata", userpostSchema);