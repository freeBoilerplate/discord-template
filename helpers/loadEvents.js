const fs = require('node:fs');
const getAllFiles = require('./getAllFiles');

module.exports = async (client) => {
    console.log("\nLoading up the events...")
    
    const files = await getAllFiles('events')
    
    // Add each command from files
    for (let i = 0; i < files.length; i++) {
        // Get file
        let file = files[i]

        // Get data from file
        const event = require(`../${file}`)
            
        // Get the event name from filename
        let eventName = file.split('.')[0]
        eventName = eventName.split('\\')
        eventName = eventName[eventName.length - 1]

        // Watch the event and give it it's function
        client.on(eventName, event)

        // Logging for devs
        console.log(`✔ ${eventName}`)
    }
}