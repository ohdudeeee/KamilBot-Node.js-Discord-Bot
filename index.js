const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    bot.user.setActivity('oldschool', {type: 'PLAYING'})
})

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = '!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    const teksty = [
    'ale jak widac, zjeby genetyczne dalej istnieja na tym serwerze ;d',
    'juz byl kiedy taki jeden przyjeb co napisal na mnie skarge',
    'to skad wiesz jak mam na imie i ze mam siostre?',
    'ale widze duzo o mnie wiesz, mialem racje, ukryty psychofan albo stalker ;d',
    'bede grał tak jak mi sie podoba, chce grac czarnucha  co wyznaje kulture hiphopową z lat 90? to bede grał. CHce grać graficiarza? Będę grał. Nawet kurwa se bede grał czarnucha co popierdala z kataną na plecach i tez chuj ci do tego'
    ]
    
    if(cmd === `${prefix}oldschool`) {
        return message.channel.send(teksty[Math.floor(Math.random() * teksty.length)]);
    }
    
    if(cmd === `${prefix}kamil`) {
        return message.channel.send('yo, jestem zajebiscie zaprogramowanym botem, spis komend: !oldschool');
    }
    
})

bot.login(process.env.BOT_TOKEN);
