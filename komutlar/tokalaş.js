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
    .setAuthor('Adlı Kullanıcıyla tokalaştın!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('Memnun oldun ha?')
		.setImage(`https://ontrava.com/wp-content/uploads/2017/05/yyy.gif`)
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
    name: 'tokalaş',
    description: 'Seçilen kullanıcıyla tokalaşır',
    usage: 'tokalaş <kişi>'
  };