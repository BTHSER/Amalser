const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/w89FHm7.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: Amalser*

*Creator number : wa.me/918891903813?text=Hi%20Amal%20Ser.%20*

 *To check update .update   To update Bot .update now*

 *Bot making video : https://youtube.com/channel/UCeXjqKkpdS7ODa4SxY7rxbQ*
     
 *Instagram id: https://instagram.com/fark_bth_?utm_medium=copy_link*

 *Yt_PASSWORD: _________(password on this video watch it full)*

 *githublink : https://github.com/BTHSER/Amalser*

 *Hope you enjoy this 🥰*
`}) 

}));
