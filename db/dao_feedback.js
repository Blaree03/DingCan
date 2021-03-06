/**
 * 操作feedbacks的dao模块
 */
var connection = require('./connection');

var mongoose = connection.mongoose;

var Schema = mongoose.Schema;
/*
 {
 "_id": {
 "$oid": "57624634edb35fb81e258e34"
 },
 "user_id": "57623dd0a20d4fc41cb26d53",
 "phone": "15611111111",
 "content": "have a good day",
 "create_time": {
 "$date": "2016-06-16T14:24:52.070+0800"
 }
 }
 */
var feedbackSchema = new Schema({
    user_id : String,
    phone : String,
    content : String,
    create_time : Date
});

var FeedbackModel = mongoose.model('feedback', feedbackSchema);
var feedbackModel = new FeedbackModel(feedback);

function addFeedback(feedback, callback) {
    feedback.create_time = Date.now();
    feedbackModel(feedback).save(callback);
}



