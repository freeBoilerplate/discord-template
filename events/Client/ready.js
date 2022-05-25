const config = require('../../config')

module.exports = (client) => {
    // Logging for devs 
    console.log(`\n✔ Client logged into ${client.user.username}#${client.user.discriminator}. Currently ready on ${client.guilds.cache.size} servers for ${client.users.cache.size} users.`)
    
    // Set the discord bots activity to what's in the config
    client.user.setActivity(config.presenceMessage)
}