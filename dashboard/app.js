const Express = require('express');
const app = Express();

module.exports = (client) => {
    // Static Files
    app.use(Express.static('public'));
    app.use('/css', Express.static(__dirname + 'public/css'));
    app.use('/img', Express.static(__dirname + 'public/img'));

    // Set Views.
    app.set('views', './templates');
    app.set('view engine', 'ejs');

    app.listen(process.env.PORT || 3001, () => client.logger.ready(`Listening to PORT: ${process.env.PORT || 3001}`));
}