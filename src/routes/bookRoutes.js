var express = require('express');

var bookRouter = express.Router();

var router = function(nav) {
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

    bookRouter.route('/')
        .get(function(req,res) {
            res.render('bookListView', {
                title: 'Hello from render',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function(req,res){
            var id = req.params.id;
            res.render('bookView', {
                title: 'Hello from render',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
}


module.exports  = router;