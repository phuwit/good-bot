const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.once('ready', () => {
    console.log('Ready!');
});

// @everyone via 'activate'
client.on('message', message => {
    // if (message.content === '!help') {
    //     message.channel.send('')
    // }
    if (message.content === '!activate') {
        const interval = setInterval(function() {
            message.channel.send('@everyone')
                .catch(err => {
                    console.error(err);
                    clearInterval(interval);
                });
        }, 1000);

        task = interval;
    }
    else if (message.content === '!deactivate'){
        clearInterval(task);
    }
});

client.on('message', async message => {
    async function playAudio(path, vol) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(path, { volume: vol });
        dispatcher.on('error', console.error);
        dispatcher.on('finish', () => connection.disconnect());
    }
    if (message.content === '!spdrn' && message.member.voice.channel) {
        message.channel.send('bruh');
        playAudio('spdrn.mp3', 0.7);
    }
    else if (message.content === '!B' && message.member.voice.channel) {
        playAudio('bruh.mp3', 1.7);
    }
    else if (message.content === '!fast' && message.member.voice.channel) {
        playAudio('fast.mp3', 0.6);
    }
    else if (message.content === '!what' && message.member.voice.channel) {
        playAudio('what.mp3', 1);
    }
    else if (message.content === '!amogus' && message.member.voice.channel) {
        playAudio('amogus.mp3', 0.7);
    }
    else if (message.content === '!sesame' && message.member.voice.channel) {
        playAudio('sesame.mp3', 1);
    }
});

client.login('ODU0MjkzMDE0NjY3MzI5NTM3.YMh0Xg.6QLWiXqDVTCOwGoTxmq5XrIaauI');
