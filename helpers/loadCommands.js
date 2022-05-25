const fs = require('node:fs');

module.exports = async (client) => {
    console.log("Loading up the commands...")

    // Find each directory within commands
    fs.readdirSync('./commands/').forEach(dir => {
        // Find each file (command), within the directory
        let dirCommands = fs.readdirSync(`./commands/${dir}`).filter(files => files.endsWith('.js'))
        for (const file of dirCommands) {
            // Read in the command file
            const command = require(`../commands/${dir}/${file}`)

            // Add the command to the collection
            client.commands.set(command.name.toLowerCase(), command.execute)

            // Delete the import cache for optimization
            delete require.cache[require.resolve(`../commands/${dir}/${file}`)];

            // Logging for devs
            console.log(`✔ '${dir}: ${command.name.toLowerCase()}'`)
        }
    })
    console.log("\nCommand loading complete!")
}