module.exports = {
    name: 'ping',
    description: '',
    aliases: ['p'],
    execute: (client, message, args) => {
        message.reply('Pong!')
    }
}