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
    
    if(cmd === `${prefix}oldschool`) {
        return message.channel.send('yo,powiem tak, moja postac jest uczulona na punkcie graffiti i jak widze malowane graffiti tam gdzie malowała moja postac to moja postać wiadomo że sie wkurwi i na pewno nie podejdzie i nie powie "o dziekuje ze z crossowaliscie mi graffiti", z tym sniczem było na zlecenie naszego bossa aby kazdy wiedzial kto sie rozjebał, a wy to z crossowaliście - co jeszcze bardziej podbudziło moją postać, dlatego ja wam z crossowałem. Teraz widze moje wrzuty z crossowane, a jedna usunieta, nie wiem nie wnikam pewnie zlecenie admina, wiec na pewno moja postać tego nie odpuści i znów będzie graffiti beef. Moja postać mieszka na idlewood i jest powiązana z kliką tej dzielnicy i denerwuje ją to że ktoś maluje po jego terenie, więc proste że pójdzie cross.A z tym co crossowaliscie to slyszalem ze sami kazaliscie wypierdalac im z "waszego terenu" i smialiscie im sie prosto w morde crossujac tagi od nas.');
    }
    
})

bot.login(process.env.BOT_TOKEN);
