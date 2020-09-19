const router = require('express').Router();

module.exports = (client) => {
    router.get('/', (req, res) => {
        res.render('index', { title: 'Project Bot List | Home'})
    });

    return router;
}