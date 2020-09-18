// .env
require('dotenv').config();

// NPM packages
const { Client, Collection } = require('eris');

// Files
const logger = require('./utils/logger');
const functions = require('./utils/functions')

// Constructors
const client = new Client(process.env.TOKEN);

// Collections
client.commands = new Collection();
client.aliases = new Collection();

// Client Vars
client.logger = logger;
client.functions = functions;

// Load the module and command handler
["module", "command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.connect();