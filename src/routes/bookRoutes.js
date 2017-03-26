var express = require('express');
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var bookRouter = express.Router();

var router = function (nav) {

    bookRouter.use(function(req,res,next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });

    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.find({}).toArray(function (err, results) {
                    res.render('bookListView', {
                        title: 'Hello from render',
                        nav: nav,
                        books: results
                    });

                    db.close();
                });
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = new ObjectId(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.findOne({_id: id}, function (err, results) {
                    if (err) {
                        console.error(err);
                        res.status(404).send('404 Error');
                    } else {
                        res.render('bookView', {
                            title: 'Hello from render',
                            nav: nav,
                            book: results
                        });

                        db.close();
                    }
                });
            });
        });

    return bookRouter;
}


module.exports = router;