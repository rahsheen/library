var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Niko Tolstoy',
            read: false
        },
        {
            title: 'It',
            genre: 'Horror',
            author: 'Stephen King',
            read: false
        },
            {
            title: 'Black Devil Doll',
            genre: 'Horror',
            author: 'Sum Goy',
            read: false
        },
            {
            title: 'The GodFather',
            genre: 'Crime',
            author: 'Scorcese',
            read: false
        }
    ];

var router = function(nav) {

    adminRouter.route('/addBooks')
        .get(function(req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results){
                    res.send(results);
                    db.close();
                });
            });

            //res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;