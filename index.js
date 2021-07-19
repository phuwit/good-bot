const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.once('ready', () => {
    console.log('Ready!');
    client.user.setPresence({
        activity:{
            name: 'use !help'
        }
    })
});

// @everyone via 'activate'
client.on('message', message => {
    if (message.content === '!help') {
        message.channel.send("good bot v.3u1 https://github.com/phuwit/good-bot\n```!activate & !deactivate\n!spdrn\n!B\n!fast\n!what\n!amogus\n!sesame\n!shesaid\n!rickroll\n!nyan\n!shootingstars\n!coffin\n!crazyfrog\n!curb\n!numa\n!fbi\n!hallelujah\n!dejavu\n!ppap\n!spiderman\n!pizza\n!lion```")
    }
    else if (message.content === '!activate') {
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
    else if (message.content === '!rickroll' && message.member.voice.channel) {
        playAudio('rickroll.mp3', 1);
    }
    else if (message.content === '!shesaid' && message.member.voice.channel) {
        playAudio('shesaid.mp3', 1);
    }
    else if (message.content === '!nyan' && message.member.voice.channel) {
        playAudio('nyan.mp3', 0.6);
    }
    else if (message.content === '!shesaid' && message.member.voice.channel) {
        playAudio('shesaid.mp3', 1);
    }
    else if (message.content === '!shootingstars' && message.member.voice.channel) {
        playAudio('shootingstars.mp3', 0.8);
    }
    else if (message.content === '!coffin' && message.member.voice.channel) {
        playAudio('coffin.mp3', 1);
    }
    else if (message.content === '!crazyfrog' && message.member.voice.channel) {
        playAudio('crazyfrog.mp3', 1);
    }
    else if (message.content === '!curb' && message.member.voice.channel) {
        playAudio('curb.mp3', 1);
    }
    else if (message.content === '!numa' && message.member.voice.channel) {
        playAudio('numa.mp3', 1);
    }
    else if (message.content === '!fbi' && message.member.voice.channel) {
        playAudio('fbi.mp3', 1);
    }
    else if (message.content === '!hallelujah' && message.member.voice.channel) {
        playAudio('hallelujah.mp3', 1);
    }
    else if (message.content === '!dejavu' && message.member.voice.channel) {
        playAudio('dejavu.mp3', 1);
    }
    else if (message.content === '!ppap' && message.member.voice.channel) {
        playAudio('ppap.mp3', 1);
    }
    else if (message.content === '!spiderman' && message.member.voice.channel) {
        playAudio('spiderman.mp3', 1);
    }
    else if (message.content === '!pizza' && message.member.voice.channel) {
        playAudio('pizza.mp3', 1);
    }
    else if (message.content === '!lion' && message.member.voice.channel) {
        playAudio('lion.mp3', 1);
    }
});

client.login('bottoken');
