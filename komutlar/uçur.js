const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Uçuyorsun!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('Uçuyoruz gençlik :rocket:')
		.setImage(`http://www.gifmania.com.tr/Hareketli-Gifler-Uzay/Gif-Resimleri-Astronomi/Animasyonlar-Uzay-Roketi/Uzay-Roketi-85172.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: 'uçur',
    description: 'uçarsınız',
    usage: 'uçur'
  };
