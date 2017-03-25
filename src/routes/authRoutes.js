var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function() {
    authRouter.route('/signUp')
        .post(function(req, res) {
            console.log(req.body);
            req.login(req.body, function() {
                res.redirect('auth/profile');
            })
        });

    return authRouter;
};

module.exports = router;