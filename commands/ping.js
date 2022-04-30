const { SlashCommandBuilder } = require('@discordjs/builders');

/* Make sure NAME matches the file name exactly. Commands rely on this */
const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('pings the server and returns pong')
	.setDefaultPermission(true)

const func = async (client, interaction) => {
    await interaction.reply("pong")
}

module.exports = { data, func}