const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA1NTE0NDM5MTIyMjIzMTM0.XT-hYw.9o64F2Xq64q2JZc3gzTaEFJrs2k';

const PREFIX = '!'

bot.on('ready', () =>{
    console.log('This bot is online, my dudes!');
})

bot.on('greeting', greeting=>{
    if(greeting.content === 'Hewwo!!'){
        greeting.reply('Hewwo friend OwO');
    }
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'uwu':
            message.reply('owo');
        break;
        case 'owo':
            message.reply('uwu');
        break;
        case 'anime':
            message.reply('here you go, uwu https://docs.google.com/document/d/1l-8I6Wmv2YCck2mHOKeVh-lmIwsKL7h_O3y5lZVy-wg/edit?usp=sharing');
        break;
        case 'manga':
            message.reply('sowwy, Ciel has not made a link for that')
        break;
    

    }
})

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.find( channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Hewwo and welcome to J.A.M. club, ${member} pwease read the rules in the rules channel uwu`)
})
bot.login(process.env.BOT_token);
