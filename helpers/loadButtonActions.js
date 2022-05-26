const fs = require('node:fs');
const getAllFiles = require('./getAllFiles');

module.exports = async (client) => {
    console.log("\nLoading up the Button Actions...")
    
    const files = await getAllFiles('actions/buttons')
    
    // Add each command from files
    for (let i = 0; i < files.length; i++) {
        // Get file
        let file = files[i]

        // Get data from file
        const command = require(`../${file}`)

        // Ignore if disabled
        if (!command.disabled) {
            // Add the command to the collection
            client.buttonActions.set(command.name, command.execute)

            // Logging for devs
            console.log(`✅ ${command.name}`)
        } else {
            // Logging for devs
            console.log(`❌ ${command.name}`)
        }


        // Delete the import cache for optimization
        delete require.cache[require.resolve(`../${file}`)];


    }
}