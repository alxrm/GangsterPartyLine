'use strict'

const config = require('./config.json')
const tg = require('telegram-node-bot')(config.token)

tg.router.
    when(['/start'], 'StartController')

tg.controller('StartController', ($) => {
    tg.for('/start', ($) => {
        
    })
})