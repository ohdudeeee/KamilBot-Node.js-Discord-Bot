const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    bot.user.setActivity('!kamil', {type: 'PLAYING'})
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
    
    const wrzuty = [
    'https://i.imgur.com/sJLpezz.png',
    'https://i.imgur.com/QQTW7JA.png',
    'https://i.imgur.com/4BmJhvk.png',
    'https://i.imgur.com/yUROlPf.png',
    'https://i.imgur.com/EMgOUdf.png',
    'https://i.imgur.com/5d0k7Zk.png'
    ]
    
    if(cmd === `${prefix}oldschool`) {
        return message.channel.send(teksty[Math.floor(Math.random() * teksty.length)]);
    }
    
    if(cmd === `${prefix}bomb`) {
        return message.channel.send(`Yaa, Oldschool`, {file: wrzuty[Math.floor(Math.random() * wrzuty.length)]});
    }
    
    if(cmd === `${prefix}kamil`) {
        return message.channel.send('yo, jestem zajebiscie zaprogramowanym botem, spis komend: !oldschool (losowy tekst), !bomb (losowa oldschoolowa Boomba)');
    }
    
    if(cmd === `kamil`) {
        return message.channel.send('co');
    }
    
    if(cmd === `gowno`) {
        return message.channel.send(':frowning:');
    }
    
})

bot.login(process.env.BOT_TOKEN);
