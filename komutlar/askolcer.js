const Discord = require('discord.js');

const cevaplar = [
    ":heart: :heart: :heart: :heart: :heart: %100 | Gerçekten seviyorsun.",
    ":heart: :heart: :heart: :heart: %75 | Hoşlanıyorsun :smile:",
    ":heart: :heart: :heart: %50 | Yarı yarıya değilmi ? :angry:",
    ":heart: :heart: %20 | Gerçekten ciddi sıkıntılarınız var. :rage:",
    "%0 | Agam gösterge bozuldu heralde :stuck_out_tongue_closed_eyes: ",
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
