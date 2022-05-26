const config = require('../../config')

module.exports = (message) => {
    // Check to make sure the global variable is set for Client
    if (!global.client) return

    // Don't run code if message is a bot
    if (message.author.bot) return

    // Check prefix
    if (message.content[0] !== config.commandPrefix) return

    // Remove prefix and tokenize command
    let args = message.content.slice(1).split(' ')

    // Find command
    let command = global.client.commands.get(args[0])
    let alias = global.client.aliases.get(args[0])

    // Check if valid command
    if (!command && !alias) return

    // Log Command
    console.log(`Command Executed: ${config.commandPrefix}${args[0]} by ${message.author.username}#${message.author.discriminator}`)

    // Execute command
    command ? command(global.client, message, args.slice(1)) : alias(global.client, message, args.slice(1))
}