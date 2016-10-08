/**
 * 链接数据库的模块
 */
var mongoose = require('mongoose');

exports.mongoose = mongoose;

function connect() {
    mongoose.connect('mongodb://127.0.0.1/atguigu_o2o');
    var connection = mongoose.connection;

    connection.on('error', console.error.bind(console, 'connection error:'));

    connection.once('open', function (callback) {
        console.log('we are connected');
    });
}

exports.connect = connect;

function disconnect() {
    mongoose.disconnect();
}

exports.disconnect = disconnect;
