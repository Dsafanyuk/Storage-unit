var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsersSchema = new Schema({
    name: String,
    phone: Number,
    paymentInfo:{
        paidStatus: Boolean
    }
});


var userModel = mongoose.model('Users', UsersSchema);

module.exports = userModel;