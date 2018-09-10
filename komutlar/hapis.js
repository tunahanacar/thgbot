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
    .setAuthor('Hapise atıldın!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('Geri kalan ömrünü burada geçireceğin üzücü.. :sob:')
		.setImage(`http://www.yenimesaj.com.tr/images/haberler/2018/04/trafik_magandalarina_3_yil_hapis_cezasi_h13059386_30a39.jpg`)
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
    name: 'hapis',
    description: 'hapise atarsın',
    usage: 'hapis <kişi>'
  };