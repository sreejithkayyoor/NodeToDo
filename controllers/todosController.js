var routes = require('express').Router();
var Todos = require('../models/todoModel');

// routes.get('/abc/:ab', function(req,res){
//     res.send('It works');
// })
routes.get('/username/:username', function(req,res){
    Todos.find({ username: req.params.username }, (err,todos)=>{
        if(err) throw err;
        res.send(todos);
    });
});
routes.get('/id/:id', function(req,res){
    Todos.findById({ _id: req.params.id }, (err,todos)=>{
        if(err) throw err;
        res.send(todos);
    });
});
routes.post('/', function(req,res){

    if(req.body.id){
        Todos.findByIdAndUpdate(req.body.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachement: req.body.hasAttachement
        }, function(err,todo){
            if(err) throw err;
            res.send('Record Successfully Updated');
        });
    }else{
        
        var newTodo = Todos({
            username: req.body.username,
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachement: req.body.hasAttachement
        });

        newTodo.save(function(err){
            if(err) throw err;
            res.send('Record Successfully Added');
        });
    }
});
routes.delete('/:id', function(req,res){

    Todos.findByIdAndDelete(req.params.id, function(err){
        if(err) throw err;
        else{
            res.send('Record Deleted');
        }
    });
});

module.exports = routes;