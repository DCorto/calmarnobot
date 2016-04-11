var TelegramBot = require('node-telegram-bot-api');

var token = process.env.BOT_TOKEN;

// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /send
bot.onText(/\/send/, function (msg, match) {
    var fromId = msg.from.id;
    bot.sendPhoto(fromId,"assets/calmarno.jpg");
});