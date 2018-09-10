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
    .setAuthor('Sen Türksün !!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('Daha ne kadar belli edebilirsinki? :flag_tr:')
		.setImage(`https://78.media.tumblr.com/733590dad1163ed17af4653d6df3941a/tumblr_p0751nXMLS1v791ndo1_500.gif`)
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
    name: 'türk',
    description: 'Türk olduğunu kanıtlar.',
    usage: 'türk'
  };