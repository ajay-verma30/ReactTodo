const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    }
})

const Todo = new mongoose.model('Todo', todoSchema);
module.exports = Todo;