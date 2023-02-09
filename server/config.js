require("dotenv").config()
const mongoose = require('mongoose');
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const connection = mongoose.connect('mongodb+srv://crudapp:crudapp@cluster0.cchpj2i.mongodb.net/?retryWrites=true&w=majority',connectionparams);

module.exports= connection;