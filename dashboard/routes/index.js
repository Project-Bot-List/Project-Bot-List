const router = require('express').Router();

module.exports = (client) => { 

    // Routes
    const login = require('./login');
    const api = require('./api');
    const website = require('./website')(client);

    router.use('/login', login);
    router.use('/api', api);
    router.use('/', website);
    return router;

}