const fs = require('node:fs');
const getAllFiles = require('./getAllFiles');

module.exports = async (client) => {
    console.log("\nLoading up the commands...")
    
    const files = await getAllFiles('commands')
    
    // Add each command from files
    for (let i = 0; i < files.length; i++) {
        // Get file
        let file = files[i]

        // Get data from file
        const command = require(`../${file}`)

        // Add the command to the collection
        client.commands.set(command.name.toLowerCase(), command.execute)

        // Adds the aliases
        for (let j = 0; j < command.aliases.length; j++) {
            client.aliases.set(command.aliases[j].toLowerCase(), command.execute)
        }

        // Delete the import cache for optimization
        delete require.cache[require.resolve(`../${file}`)];

        // Logging for devs
        console.log(`✔ ${command.name.toLowerCase()}`)
    }
}