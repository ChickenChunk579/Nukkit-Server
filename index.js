const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '185.107.192.190',
  port: 26318,
  username: 'afk',
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('Bot spawned');
});
