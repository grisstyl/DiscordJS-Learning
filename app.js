const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.toLowerCase() === '-new') {
    message.reply('This feature is a work-in-progress!');
  }
});

fs.readFile('secret.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log('You must provide a secret.txt');
  }

  let secret = data.split('\n')[0];

  client.login(secret);
});
