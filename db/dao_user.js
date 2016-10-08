/**
 * 操作User的dao模块
 */
var connection = require('./connection');

var mongoose = connection.mongoose;

var Schema = mongoose.Schema;

var userSchema = new Schema({
   phone : String
});

var UserModel = mongoose.model('user', userSchema);

function getUser(phone, callback) {
    UserModel.findOne({phone:phone}, callback);
}
exports.getUser = getUser;

function addUser(phone, callback) {
    new UserModel({phone:phone}).save(callback);
}
exports.addUser = addUser;
