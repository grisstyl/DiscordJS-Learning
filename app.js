const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

fs.readFile('secret.txt', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }

  let secret = data.split('\n')[0];

  client.login(secret);
})
