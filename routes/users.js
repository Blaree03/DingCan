/*
 *  user模块路由
 */
var db = require('../db/db');
module.exports = function (router) {
    /*
     登陆
     phone=13716962779&code=123123
     {
     "code": 0,
     "data": {
     "__v": 0,
     "phone": "13716962779",
     "_id": "576bbe0aa1d183c42c06c08e"
     }
     }
     */
    router.post('/login', function (req, res, next) {
        var phone = req.body.phone;
        var code = req.body.code;
        console.log('/login', phone, code);

        db.getUser(phone, function (user) {
            if(user==null){
                db.addUser(phone, function (user) {
                    res.send({
                        code : 0,
                        data : user
                    });
                })
            }else{
                res.send({
                    code : 0,
                    data : user
                });
            }
        });
    });

    router.get('/feedback', function (req, res, next) {
        var feedback = JSON.parse(req.query.data);
        console.log('/feedback', feedback);

        db.addFeedback(feedback, function (feedback) {
            res.send({
                code : 0,
                data : feedback
            });
        });
    });

};



