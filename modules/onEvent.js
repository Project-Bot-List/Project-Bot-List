const dashboard = require('../dashboard/app');

module.exports.run = (client) => {

    dashboard(client);

    client.on('ready', async () => {
        client.editStatus('online', {
            name: `syn coding me.`, 
            type: 3,
        });

        client.logger.ready(`Logged in as ${client.user.username} | Users: ${client.users.size} | Guilds: ${client.guilds.size}`);
    });

    client.on('disconnect', () => client.logger.disconnect(`Disconnected from ${client.user.username}`));
    client.on('reconnect', () => client.logger.reconnect(`Reconnected as ${client.user.username}`))
}