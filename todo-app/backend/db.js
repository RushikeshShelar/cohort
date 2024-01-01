const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/todo');

const todoSchema = Schema({
    title: {
        type: String,
    },
    description:{
        type: String,
    },
    completed:{
        type: Boolean,
    }
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports = {
    Todo
}