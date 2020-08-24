import * as StellarSDK from 'stellar-sdk'
class Account {
  private Stellar = StellarSDK

  createKeyPair () {
    return this.Stellar.Keypair.random()
  }
}

export const account = new Account()
