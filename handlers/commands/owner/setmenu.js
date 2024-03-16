const fs = require('fs');
const util = require("util")
let config = require('../../../WaSocket/src/config.json');

module.exports = {
  tags: ['owner'],
  args: ['video|image|render|gif'],
  help: ['setmenu'],
  cmd: ['setmenu'],
  owner: true,
  exec: async (m, Darlyn, { prefix, cmd, body, msg, args }) => {
    try {
      await Darlyn.presenceSubscribe(m.chat);
      await Darlyn.sendPresenceUpdate('composing', m.chat);
      const validMenus = ['video', 'image', 'render', 'gif', 'large'];
      if (validMenus.includes(args[0])) {
        config.setMenu = args[0];
        fs.writeFileSync('./WaSocket/src/config.json', JSON.stringify(config, null, 2));
        m.reply(`*🚩 Menú cambiado a: ${args[0]}.*`);
      } else {
        m.reply(`🍟 *Ejemplo ∙* ${prefix + cmd} video\n
*Opciones ∙*\n
*${prefix + cmd} ∙* < video / image / render / gif >
*video ∙* Cambiar el menú a video.
*image ∙* Cambiar el menú a image.
*render ∙* Cambiar el menú a render.
*gif ∙* Cambiar el menú a gif.`);
      }
    } catch (error) {
      m.reply(util.format(error));
      console.log(error);
    }
  },
};
