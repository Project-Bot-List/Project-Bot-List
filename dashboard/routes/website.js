const router = require('express').Router();

module.exports = (client) => {
    router.get('/', (req, res) => {
        res.render('home.ejs', { title: 'Project Bot List | Home'})
    });

    return router;
}