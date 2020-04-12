var express = require('express');
var app = express();
require('dotenv').config({path:__dirname +'\\config\\.env'});
var bodyParser = require('body-parser');
var connections = require('./connections');
var controllers = require('./controllers');

var port = process.env.PORT || 3000;
var mongoDb = connections.connectToMongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', controllers);
app.use('/assets', express.static(__dirname + '\\public'));

app.set('view engine', 'ejs');
console.log('listening to port: ',port)
app.listen(port);