const assert = require('assert')
const mycccoin = require('../middleware/mycccoin')

// Get enviroment in the .env
require('dotenv').config()

describe('mycccoin API', () => {
  describe('/getChain', () => {
    it('Should return a chain with only the genesis block', () => {
      const req = {}
      mycccoin.getChain(req, {}, () => {
        const chain = req.responseValue.chain
        assert.equal(chain.length, 1)
      })

    })
  })
  describe('/mine', () => {
    it('Should mine a new block to add into the chain', () => {
      const req = {}
      mycccoin.mine(req, {}, () => {
        mycccoin.getChain(req, {}, () => {
          const chain = req.responseValue.chain
          assert.equal(chain.length, 2)
        })
      })
    })
  })
  describe('/transaction/new', () => {
    it('Should add the new transaction to the next mining', () => {
      const req = {
        body: {
          sender: 'sender1',
          recipient: 'sender2',
          amount: 1
        }
      }
      mycccoin.newTransaction(req, {}, () =>{
        mycccoin.mine(req, {}, () => {
          mycccoin.getChain(req, {}, () => {
            const chain = req.responseValue.chain
            const transactions = chain.slice(-1)[0].transactions
            assert.equal(transactions[0].sender, 'sender1')
          })
        })
      })
    })
  })
})