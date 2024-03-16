const fs = require('fs')
const chalk = require('chalk')

global.owner = JSON.parse(fs.readFileSync('./database/owner.json'))
global.moderadores = JSON.parse(fs.readFileSync('./database/moderador.json'))
global.friends = JSON.parse(fs.readFileSync('./database/friends.json'))
global.premium = ['59895555500']
global.botname = 'ᴅᴇʟɪʀɪᴜꜱ 🌵'
global.prefa = ['', '!', '.', '/', '#', '@', '|', '=']
global.sp = '⭔'

global.APIs = {
  delirius: 'https://delirius-api.vercel.app/',
}

let apirnobg = [
  'q61faXzzR5zNU6cvcrwtUkRU',
  'S258diZhcuFJooAtHTaPEn4T',
  '5LjfCVAp4vVNYiTjq9mXJWHF',
  'aT7ibfUsGSwFyjaPZ9eoJc61',
  'BY63t7Vx2tS68YZFY6AJ4HHF',
  '5Gdq1sSWSeyZzPMHqz7ENfi8',
  '86h6d6u4AXrst4BVMD9dzdGZ',
  'xp8pSDavAgfE5XScqXo9UKHF',
  'dWbCoCb3TacCP93imNEcPxcL'
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
})
