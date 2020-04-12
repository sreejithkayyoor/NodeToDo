var Todos = require('../models/todoModel');

module.exports = (req, res)=>{
        
    var starterTodos = [
        {
            username: 'justinDoe',
            todo: 'Buy milk',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'jeromeDoe',
            todo: 'Feed dog',
            isDone: false,
            hasAttachment: false
        },
        {
            username: 'josephDoe',
            todo: 'Learn Node',
            isDone: false,
            hasAttachment: false
        }
    ];
    Todos.create(starterTodos, function(err, results) {
        res.send(results);
    });
    
};

