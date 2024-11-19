const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'unnamed-smp.aternos.me:26318',
  username: 'afk',
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('Bot spawned');
});
