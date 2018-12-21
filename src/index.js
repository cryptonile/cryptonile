let kameleon = require('kameleon')
let currency = require('kameleon-currency')
let config = require('../node.json')
let premine = require('../premine.json')

let node = new kameleon(config)

node.use(currency(premine))

node.start()