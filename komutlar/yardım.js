const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("THG [BOT] KOMUTLAR")
  .setDescription('')
  .setColor(0xff0000)
  .addField("Yeni Komutlar:", 't!günaydın = Bahsedilen kişiye günaydın der. \n t!uyu = Uyursunuz. \n t!uçur = Bahsedilen kişiyi uçurur.')
  .addField("Eğlence Komutları:", `t!banned = Banlama şakası yapar. \n t!stresçarkı = Stres çarkı çevirir. \n t!öp = Belirtilen kişiyi öper. \n t!sarıl = Belirtilen kişiye sarılır. \n t!tokalaş = Belirtilen kişiyle tokalaşır \n t!yumruh-at = Yumruk Atarsınız. \n t!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n t!emojiyazı = Emoji şeklinde yazı yazarsınız. \n t!sorusor = Sorduğunuz soruya cevap verir. \n t!türk = Türk olduğunu kanıtlar. \n t!hapis = Birisini hapse atarsın.`)
  .addField("Kullanıcı Komutları:" , 't!avatarım = Avatarınınızı Gösterir. \n t!döviz = Döviz durmunu gösterir. \n t!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n t!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n t!sex = NSFW Komutudur. \n t!ass = NSFW Komutudur.')
  .addField("Sunucu Yetkilisi Komutları", `t!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n t!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n t!unban = İstediğiniz Kişinin Yasağını Açar. \n t!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \n t!oylama = Oylama Açar. \n t!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("Botun Ana Komutları", "t!yardım = BOT Komutlarını Atar. \n t!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n t!davet = BOT Davet Linkini Atar.")
  .addField("[BOT] Hakkında" , "[BOT] Tunahan Acar Tarafından Kodlanmıştır. \n [BOT] Destek olmak için **t!botöneri** = İstediğiniz şeyleri önerebilirsiniz.")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\n Doğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
