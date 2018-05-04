var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsersSchema = new Schema({
    name: String,
    phone: Number
});
/* var PaymentSchema = new Schema({
    paidStatus: Boolean,
    datePaid: Date,
    amountPaid: Number
}); */

var userModel = mongoose.model('Users', UsersSchema);
//var payModel  = mongoose.model('PaymentInfo', PaymentSchema);

module.exports = userModel;
//module.exports = payModel;