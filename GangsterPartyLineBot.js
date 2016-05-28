'use strict'

const config = require('./config.json')
const constants = require('./constants.json')
const tg = require('telegram-node-bot')(config.token)
const MenuGenerator = require('./utils/MenuGenerator')
const ShitTalkRequest = require('./entity/ShitTalkRequest')
const User = require('./entity/User')

tg.router.
    when(['/start'], 'StartController')

tg.controller('StartController', ($) => {
    tg.for('/start', ($) => {
        $.runMenu(
            MenuGenerator.generate(
                constants.messages.сhooseYourNigga,
                constants.menus.niggaTypeChoosing,
                ($) => {
                    const user = User.fromRaw($.user)
                    const request = new ShitTalkRequest(user, $.message.text)

                    console.log(request)
                    tg.sendMessage(config.logsChatId, request.textDescription)
                }
            )
        )
    })
})
