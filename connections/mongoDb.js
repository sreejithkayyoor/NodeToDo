var mongoose = require('mongoose');
module.exports = {
    connectToDb : function () {
        return mongoose.connect(process.env.connectionString,{ useNewUrlParser: true,  useUnifiedTopology: true ,useFindAndModify: false});
    }
}