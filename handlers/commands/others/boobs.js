module.exports = {
  tags: ['Random', 'Nsfw'],
  cmd: ['boobs', 'tetas'],
  help: ['boobs'],
  exec: async (m, Darlyn, { prefix, cmd, arg }) => {
    try {
      Darlyn.sendFileFromUrl(
        m.chat,
        'https://delirius-nsfw.onrender.com/media/r/boobs',
        '*Powered By Delirius (神志不清)*',
        m
      )
    } catch (error) {
      m.reply('*🚩 Error :* ' + new Error(error).message)
      console.log(error)
    }
  }
}
