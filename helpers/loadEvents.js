const fs = require('node:fs');

module.exports = async (client) => {
    console.log("\nLoading up event listeners...")
    fs.readdirSync('./events/').forEach(dir => {
        let dirEvents = fs.readdirSync(`./events/${dir}`).filter(files => files.endsWith('.js'))
        for (const file of dirEvents) {
            const event = require(`../events/${dir}/${file}`)
            const eventName = file.split('.')[0]
            client.on(eventName, event)
            console.log(`✔ '${dir}: ${eventName}'`)
        }
    })
    console.log("\nEvents loading complete!")
}