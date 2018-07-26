const express = require('express')
const router = express.Router()
const { check } = require('express-validator/check')

const mycccoin = require('../middleware/mycccoin')

const responseMiddleware = (req, res, next) => {
  return res.json(req.responseValue)
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'mycc Coin' })
})

router.post('/transactions/new', [
  check('sender', 'Sender must be a String').exists(),
  check('recipient', 'Sender must be a String').exists(),
  check('amount', 'Sender must be a Int Value').isInt().exists()
], mycccoin.newTransaction, responseMiddleware)

router.get('/mine', mycccoin.mine, responseMiddleware)

router.get('/chain', mycccoin.getChain, responseMiddleware)

router.post('/node/register', [
  check('node', 'Node must be a String').exists()
], mycccoin.addNode, responseMiddleware)

module.exports = router
