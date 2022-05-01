/*
	Current Invite Link: https://discord.com/oauth2/authorize?client_id=968648306689466458&permissions=8&scope=bot%20applications.commands
/* 
    Documentation Guides found Useful
        - https://discordjs.guide/interactions/slash-commands.html#guild-commands
*/

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
require('dotenv').config()

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const clientId = process.env.DISCORD_CLIENT_ID

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (interaction.isButton()) {
		const command = require(`./commands/buttons/${interaction.customId}`);
		if (!command) return

		await command.func(client, interaction)
	} else {
		if (!interaction.isCommand()) return;

		const command = require(`./commands/${interaction.commandName}`);
		if (!command) return
	
		await command.func(client, interaction)
		console.log(`Successfully ran the /${interaction.commandName} command.`)
	}
});
client.login(process.env.DISCORD_TOKEN);
