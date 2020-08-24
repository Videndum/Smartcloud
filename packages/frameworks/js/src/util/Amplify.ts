import aws from 'aws-amplify'
import Predictions, {
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions' // import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions'
const awsconfig = require('../aws-exports.js')

export class Amplify {
  private amplify = aws
  constructor () {
    this.amplify.configure(awsconfig)
    this.amplify.addPluggable(new AmazonAIPredictionsProvider())
  }

  translate (
    src: { textToTranslate: string; language: string },
    targetLanguage: string
  ) {
    return Predictions.convert({
      translateText: {
        source: {
          text: src.textToTranslate,
          language: src.language
        },
        targetLanguage: targetLanguage
      }
    })
      .then(result => {
        return result.text
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}

export const amplify = new Amplify()
