const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

/* Make sure NAME matches the file name exactly. Commands rely on this */
const data = new SlashCommandBuilder()
	.setName('button')
	.setDescription('a button example command')
	.setDefaultPermission(true)

const func = async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('example')
            .setLabel('Example Button')
            .setStyle('PRIMARY'),
    );

    await interaction.reply({ content: 'Pong!', components: [row] });
}

module.exports = { data, func }