var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'intro':
                bot.sendMessage({
                    to: channelID,
                    message: 'A Discord for Group10 of Software Engineering'
                });
            break;
            case 'status':
                bot.sendMessage({
                    to: channelID,
                    message: 'Issam added Firecode to the project'
                });
            break;
            case 'goal':
                bot.sendMessage({
                    to: channelID,
                    message: 'Decide the look and different components of the web application'
                });
            break;
            case 'hi':
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hi, I am a Bot Daniell copied online.'
                });
            break;
            case 'raffle':
                bot.sendMessage({
                    to: channelID,
                    message: 'SHUT UP'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});