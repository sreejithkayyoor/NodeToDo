var express = require('express');
var app = express();
var cors = require('cors');
require('dotenv').config({path:__dirname +'\\config\\.env'});
var bodyParser = require('body-parser');
var connections = require('./connections');
var controllers = require('./controllers');

var port = process.env.PORT || 3000;
var mongoDb = connections.connectToMongo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.get('/', function(req,res){
//     res.sendFile(__dirname +'\\index.html')
// })
app.use('/api', controllers);
app.use('/', express.static(__dirname + '/public/src'));
console.log(__dirname + '\\public\\src')

app.set('view engine', 'ejs');
console.log('listening to port: ',port)
app.listen(port);