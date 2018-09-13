const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("Yeni Komutlar:", '**t!çekirdek** = Olay durumunda çekirdek çitler. \n **t!günaydın** = Bahsedilen kişiye günaydın der. \n **t!uyu** = Uyursunuz. \n **t!uçur** = Bahsedilen kişiyi uçurur.')
    .addField("Eğlence Komutları:", `**t!banned** = Banlama şakası yapar. \n **t!stresçarkı** = Stres çarkı çevirir. \n **t!öp** = Belirtilen kişiyi öper. \n **t!sarıl** = Belirtilen kişiye sarılır. \n **t!tokalaş** = Belirtilen kişiyle tokalaşır \n **t!yumruh-at** = Yumruk Atarsınız. \n **t!yaz** = Bota İstediğiniz Şeyi Yazdırırsınız. \n **t!emojiyazı** = Emoji şeklinde yazı yazarsınız. \n **t!sorusor** = Sorduğunuz soruya cevap verir. \n **t!türk** = Türk olduğunu kanıtlar. \n **t!hapis** = Birisini hapse atarsın.`)
    .addField("Kullanıcı Komutları:" , '**t!avatarım** = Avatarınınızı Gösterir. \n **t!döviz** = Döviz durmunu gösterir. \n **t!sunucubilgi** = BOT Sunucu Hakkında Bilgi Verir. \n **t!kullanıcıbilgim** = Sizin Hakkınızda Bilgi Verir. \n **t!sex** = NSFW Komutudur. \n **t!ass** = NSFW Komutudur.')
    .addField("Sunucu Yetkilisi Komutları", `**t!unban** = İstediğiniz Kişinin Yasağını Açar. \n **t!sustur** = İstediğiniz Kişiyi Susturur. -MUTED- \n **t!oylama** = Oylama Açar. \n **t!duyuru** = Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("Botun Ana Komutları", "**t!yardım** = BOT Komutlarını Atar. \n **t!bilgi** = BOT Kendisi Hakkında Bilgi Verir. \n **t!davet** = BOT Davet Linkini Atar.")
    .addField("[BOT] Hakkında" , "[BOT] **Tunahan Acar** Tarafından Kodlanmıştır. \n [BOT] Destek olmak için **t!botöneri** = İstediğiniz şeyleri önerebilirsiniz.")
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help', 'h', 'yardım', 'yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını gönderir.',
  usage: 'yardım'
};
