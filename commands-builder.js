const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commandList = ['amogus', 'bruh', 'cheng', 'coffin', 'crazyfrog', 'curb', 'dejavu', 'fast', 'fbi', 'hallelujah', 'kingdom', 'lion', 'numa', 'nyan', 'pizza', 'ppap', 'rickroll', 'sesame', 'shesaid', 'shootingstars', 'speedrun', 'spiderman', 'what']

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

// console.log(commands);

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);