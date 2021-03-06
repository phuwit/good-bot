const { Client, VoiceChannel, Intents } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
const {
	joinVoiceChannel,
	createAudioPlayer,
	createAudioResource,
	entersState,
	StreamType,
	AudioPlayerStatus,
	VoiceConnectionStatus,
} = require('@discordjs/voice');

const { token } = require('./config.json');
const { Linter } = require('eslint');

const client = new Client({
    shards: "auto",
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

const player = createAudioPlayer();

client.login(token);

function setAudio(audioName) {
	let resource = createAudioResource(`audio/${audioName}.opus`, {
		inputType: StreamType.Opus,
	});
	player.play(resource);
	return entersState(player, AudioPlayerStatus.Playing, 5e3);
}

async function playAudio(channel) {
	let connection = joinVoiceChannel({
		channelId: channel.id,
		guildId: channel.guild.id,
		adapterCreator: channel.guild.voiceAdapterCreator
	});

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
		return connection;
	} catch (error) {
		connection.destroy();
		throw error;
	}
}

async function autoDisconnect(connection) {
	player.on(AudioPlayerStatus.Idle, () => {
		setTimeout(() => { 
			if(connection.state.status != 'destroyed' && AudioPlayerStatus.Idle){
				connection.destroy();
			} 
		}, 300000)
	})
}

client.on('ready', async () => {
	console.log('Discord.js client is ready!');
});

// client.on('messageCreate', async (message) => {
// 	if (!message.guild) return;

// 	if (message.content === '#join') {
// 		const channel = message.member?.voice.channel;

// 		if (channel) {
// 			try {
// 				const connection = await playAudio(channel);
// 				connection.subscribe(player);
// 				await message.reply('Playing now!');
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		} else {
// 			void message.reply('Join a voice channel then try again!');
// 		}
// 	}
// });

client.on('interactionCreate', async interaction => {
    try{
        let channel = interaction.member.voice.channel;

        setAudio(interaction.commandName);
        let connection = await playAudio(channel);
        connection.subscribe(player);

        await interaction.reply({ content: `Playing ${interaction.commandName}!`, ephemeral: true });

		autoDisconnect(connection);
    }
    catch(error) {
        console.log(error);
    }
	
});
