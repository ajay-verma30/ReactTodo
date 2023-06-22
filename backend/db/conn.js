const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config()
const username = process.env.USERID;
const password = process.env.KEY;
const uri = `mongodb+srv://${username}:${password}@cluster0.ri4ol.mongodb.net/reactTodos?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
}).then(()=>{
    console.log("connected");
}).catch((e)=>{
    console.log('failed'+ e);
});