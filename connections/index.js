var mongoDb = require('./mongoDb');

module.exports = {
    connectToMongo :function () {
      return mongoDb.connectToDb()  
    } 
}