const Discord = require('discord.js');

const cevaplar = [
    ":heart: :heart: :heart: :heart: :heart: **%100** | OMG bu sonuç ney lan :smile:",
    ":heart: :heart: :heart: :heart: :heart: **%98** | Yaa sen ciddimisin :heart:",
    ":heart: :heart: :heart: :heart: **%75** | Hoşlanıyorsun :smile:",
    ":heart: :heart: :heart: :heart: **%88** | Sen ciddisin böyle devam et!! :smile:",
    ":heart: :heart: :heart: **%50** | Yarı yarıya değilmi ? :angry:",
    ":heart: :heart: :heart: **%67** | İyi gidiyorsun ? :slight_smile:",
    ":heart: :heart: :heart: **%57** | Hoşuna gidiyorsun , yolunu kaybetme ? :slight_smile:",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Birisini belirt. **Doğru Kullanım**: t!askolcer <kişi>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'askolcer', 
  description: 'THR BOT askolcer',
  usage: 'askolcer <kişi>'
};
