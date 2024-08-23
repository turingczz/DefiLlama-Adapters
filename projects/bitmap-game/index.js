const { staking } = require('../helper/staking')
const STAKE_MERL_CONTRACT = '0xb311c4b8091aff30Bb928b17Cc59Ce5D8775b13A'
const MERL_TOKEN = '0x5c46bFF4B38dc1EAE09C5BAc65872a1D8bc87378'
const STAKE_BITMAP_TOKEN_CONTRACT = '0x8567bD39b8870990a2cA14Df3102a00A7d72f7E3'
const BITMAP_TOKEN = '0x7b0400231Cddf8a7ACa78D8c0483890cd0c6fFD6'

module.exports = {
  merlin: {
    tvl: staking([STAKE_BITMAP_TOKEN_CONTRACT, STAKE_MERL_CONTRACT,], [BITMAP_TOKEN, MERL_TOKEN,]),
    staking: () => ({}),
  }
}
