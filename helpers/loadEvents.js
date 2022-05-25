const fs = require('node:fs');

module.exports = async (client) => {
    console.log("\nLoading up event listeners...")
    
    // Find each directory within events
    fs.readdirSync('./events/').forEach(dir => {
        // Find each file (event), within the directory
        let dirEvents = fs.readdirSync(`./events/${dir}`).filter(files => files.endsWith('.js'))
        for (const file of dirEvents) {
            // Read in the event file
            const event = require(`../events/${dir}/${file}`)

            // Get the event name from filename
            const eventName = file.split('.')[0]

            // Watch the event and give it it's function
            client.on(eventName, event)

            // Logging for devs
            console.log(`✔ '${dir}: ${eventName}'`)
        }
    })
    console.log("\nEvents loading complete!")
}