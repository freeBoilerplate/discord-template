const fs = require('node:fs');

module.exports = async (client) => {
    console.log("Loading up the commands...")
    fs.readdirSync('./commands/').forEach(dir => {
        let dirCommands = fs.readdirSync(`./commands/${dir}`).filter(files => files.endsWith('.js'))
        for (const file of dirCommands) {
            const command = require(`../commands/${dir}/${file}`)
            client.commands.set(command.name.toLowerCase(), command.execute)
            delete require.cache[require.resolve(`../commands/${dir}/${file}`)];
            console.log(`✔ '${dir}: ${command.name.toLowerCase()}'`)
        }
    })
    console.log("\nCommand loading complete!")
}