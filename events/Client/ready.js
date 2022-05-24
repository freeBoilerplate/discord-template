const config = require('../../config')

module.exports = (client) => {
    console.log(`\n✔ Client logged into ${client.user.username}#${client.user.discriminator}. Currently ready on ${client.guilds.cache.size} servers for ${client.users.cache.size} users.`)
    client.user.setActivity(config.presenceMessage)
}