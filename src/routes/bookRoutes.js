var express = require('express');
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var bookRouter = express.Router();

var router = function (nav) {
    var bookController = require('../controllers/bookController')(null, nav);

    // Guard all routes if not logged in
    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;