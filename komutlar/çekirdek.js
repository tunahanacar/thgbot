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
    .setAuthor('Aha olay var gel hele çitle!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('Çitle çitle daha çok var :smile:')
		.setImage(`https://cf.kizlarsoruyor.com/q9938247/0feb996c-147c-4365-a7bd-35a60bd5414f.gif`)
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
    name: 'çekirdek',
    description: 'Çekirdek çitler',
    usage: 'çekirdek <kişi>'
  };