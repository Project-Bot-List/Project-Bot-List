const Express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const Store = require('connect-mongo')(session);
const app = Express();

module.exports = (client) => {

    // Create Session
    app.use(session({
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: (((1000 * 60) * 60) * 24) * 7 },
        resave: false,
        saveUninitialized: false,
        store: new Store({ mongooseConnection: mongoose.connection })
    }));
    
    // Authentication
    app.use(passport.initialize());
    app.use(passport.session());
    
    // Development Tools
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Static Files
    app.use(Express.static('public'));
    app.use('/css', Express.static(__dirname + 'public/css'));
    app.use('/images', Express.static(__dirname + 'public/images'));

    // Set Views.
    app.set('views', './templates');
    app.set('view engine', 'ejs');

    // Routes
    const routes = require('./routes')(client);
    app.use('/', routes);
    
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requestd-With, Content-Type, Accept, Authorization');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
            res.status(200).json({});
        }
        next();
    });
    
    app.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
    });
        
    app.use((error, req, res, next) => {
        if (error.status) {
            res.status(error.status);
            res.render('templates/pages/404', {
                title: 'Project | Not found'
            });
        } else {
            console.log(error)
            res.status(500);
            res.render('templates/pages/error', {
                title: 'Project | Error'
            });
        }
    });

    app.listen(process.env.PORT || 3001, () => client.logger.ready(`Listening to PORT: ${process.env.PORT || 3001}`));
}