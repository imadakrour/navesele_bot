import {Telegraf,Markup} from "telegraf"
import { message } from "telegraf/filters"

const token = '7614479807:AAGpY0aq6Hnsc0cJK-tEG_YOIkGcq6I4tM0'
const webAppUrl= 'https://navesele-927b9.web.app'

const bot = new Telegraf(token)

bot.command('start',(ctx)=>{
  ctx.reply(
    'Welcome to Navesele !',
    Markup.keyboard([Markup.button.webApp('sendMessage', `${webAppUrl}/feedback`)])
  )

})

bot.on(message('web_app_data'),async (ctx) =>{
  const data = ctx.webAppData.data.json()
  ctx.reply(`Your data was saved`)
})

bot.launch()


