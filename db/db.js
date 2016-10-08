/**
 * 数据库操作的总接口
 *   收集各种dao的方法
 *   统一处理异常
 */
var dao_user = require('./dao_user');
var dao_feedback = require('./dao_feedback');

module.exports = {
    getUser : function (phone, callback) {
        dao_user.getUser(phone, function (error, user) {
            if (error){
                throw error;
            }else{
                callback(user);
            }
        })
    },

    addUser : function (phone, callback) {
        dao_user.addUser(phone, function (error, user) {
            if (error){
                throw error;
            }else{
                callback(user);
            }
        })
    },

    addFeedback : function (feedback, callback) {
        dao_feedback.addFeedback(feedback, function (error, feedback) {
            if (error){
                throw error;
            }else{
                callback(feedback);
            }
        })
    }
};

