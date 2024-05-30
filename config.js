const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",+254 773 440758")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = '' // add your us❄️💮D͜͡J͜͡ D͜͡E͜͡L͜͡B͜͡O͜͡Y͜͡ A͜͡N͜͡I͜͡E͜͡Y͜͡ M͜͡D͜͡ ☠☠☠🌿🍀ername
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-session.vercel.app' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || ''
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '❄️💮D͜͡J͜͡ D͜͡E͜͡L͜͡B͜͡O͜͡Y͜͡ A͜͡N͜͡I͜͡E͜͡Y͜͡ M͜͡D͜͡ ☠☠☠🌿🍀' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? '❄️💮D͜͡J͜͡ D͜͡E͜͡L͜͡B͜͡O͜͡Y͜͡ A͜͡N͜͡I͜͡E͜͡Y͜͡ M͜͡D͜͡ ☠☠☠🌿🍀' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'bales, supermarket' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '254' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 2 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove,kick' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.2.9' : process.env.VERSION,
  LANG: process.env.THEME|| '❄️💮D͜͡J͜͡ D͜͡E͜͡L͜͡B͜͡O͜͡Y͜͡ A͜͡N͜͡I͜͡E͜͡Y͜͡ M͜͡D͜͡ ☠☠☠🌿🍀',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
