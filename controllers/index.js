var routes = require('express').Router();
var setup = require('./setupController');
var healthCheck = require('./healthCheck');
var todos = require('./todosController');

routes.get('/setupController',setup);
routes.get('/healthCheck',healthCheck)
// routes.get('/todos/:username',todos.getTodoWithUname);
// routes.get('/todos/:abc',(req,res)=>{
//     res.send('IT works');
// })
routes.use('/todos',todos);
// routes.post('/todos',todos.addTodod);
// routes.delete('/todos',todos.deleteTodo);

module.exports = routes;