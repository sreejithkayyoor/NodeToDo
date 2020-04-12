var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var todoSchema = Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachement: Boolean
});

var Todos = mongoose.model('ToDo', todoSchema);

module.exports = Todos;