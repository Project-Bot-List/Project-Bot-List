const mongoose = require('mongoose');

module.exports.run = (client) => {
    // Connect to the DB
    mongoose.connect(process.env.DBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        client.logger.ready('Connected to the database')
    }).catch((err) => {
        console.log('\n-----------------------------------------------------------------------------\n');
        client.logger.error(err)
        console.log('\n-----------------------------------------------------------------------------\n');
    });
}