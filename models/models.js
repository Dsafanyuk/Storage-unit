var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsersSchema = new Schema({
    name: String,
    phone: Number,
    paymentInfo:{
        paidStatus: Boolean,
        amountPaid: Number
    }
});


var userModel = mongoose.model('Users', UsersSchema);

module.exports = userModel;