// Current Invite Link: https://discord.com/oauth2/authorize?client_id=968648306689466458&permissions=8&scope=bot%20applications.commands

// Imports of packages
const { Client, Intents, Collection } = require('discord.js');
const loadCommands = require('./helpers/loadCommands');
const loadEvents = require('./helpers/loadEvents');

// Setup env variables
require('dotenv').config()

// Setting up Client
const client = new Client({ intents: [
    "GUILDS",
    "GUILD_BANS",
    "GUILD_MEMBERS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
  ], });

// Setup Collections for storing commands and aliases
client.commands = new Collection();
client.aliases = new Collection();

// Load Events
loadEvents(client)

// Load Commands
loadCommands(client)

// Login
client.login(process.env.DISCORD_TOKEN);