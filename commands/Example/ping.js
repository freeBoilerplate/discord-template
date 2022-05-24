module.exports = {
    name: 'ping',
    aliases: ['p'],
    execute: (client, message, args) => {
        message.reply('Pong!')
    }
}