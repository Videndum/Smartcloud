type MyReturnTypeItem = {
   dev: boolean;
   error: string;
   message: string;
   instance: string;
   success: boolean;
   remaining: number;
   activations: string[];

}
type MyReturnType = {
   [name: string]: MyReturnTypeItem;
}
/**
* Startup the API
* @private
*/
 /**
 * @private
 * Activate the core
 * @return  {boolean}
 * @extends Core
 */
const parentPort = require('worker_threads').parentPort
export class Activation {
  core = require("@smartcloudai/core").core
  log:any
  // dot = require('dotenv').config()
  constructor () {}

  async License(): Promise<MyReturnType> {
    const json = {
      data: {
          dev: false,
          error: "",
          message: "",
          instance: "",
          success: false,
          remaining: 0,
          activations: []
        }
      }
    await this.checkLicense(json)
    return json
  }
  async checkLicense (json:any){
    const url = `https://tgtmedia.co.uk/woocommerce/?wc-api=software-api&request=check&email=${this.core.config.license_email}&product_id=smartcloud-server&license_key=${this.core.config.license_key}`
    await this.core.request({url: url, json: true}, function (error:any, body: any) {
      if (error) {json.data.success = false; json.data.error = error; return json}
      const info = body.body
      if (info.success === true) {
        json.data.success = true;
        json.data.remaining = info.remaining;
        json.data.activations = info.activations
        return json
      } else if (info.success === false) {
        json.data.error = info.error;
        return json;
      } else {
        return json;
      }
    })
    if (json.data.success === true) {
      await this.activateLicense(json)
    }
    return json
  }

  async activateLicense(json:any) {
    const url = `https://tgtmedia.co.uk/woocommerce/?wc-api=software-api&request=activation&email=${this.core.config.license_email}&product_id=smartcloud-server&license_key=${this.core.config.license_key}&instance=${this.core.config.instance}`
    await this.core.request({url: url, json: true}, function (error:any, body: any) {
      if (error) {json.data.success = false; json.data.error = error; return json}
      const info = body.body
      if (info.activated === true) {
        json.data.success = true
        json.data.message = info.message
        json.data.instance = info.instance
        return json
      } else {
        json.data.success = false
        json.data.error = info.error
        return json
      }
    })
    if (json.data.success === true) {
      // this.writelicense(json);
    }
    return json
  }

  writelicense(json:any) {
    const file = './license.json'
    const data = {
      license_holder_email: json.license.license_holder_email,
      license_key: json.license.license_key,
      instance: json.data.instance
    }
    if (json.data.instance === json.license.instance){
      this.core.log("License file valid", 2)
    } else {
      this.core.fs.outputJson(file, data, (err: any) => {
        if(err){this.core.log(err,4)}else{this.core.log("License Successfully Updated",2)}
        this.core.fs.readJson(file, (error: any, info: any) => {
          if (error) {this.core.log(`Error reading License: ${error}`,4)}
          this.core.log(`Successfully read license ${info.license_key}`,1)
        })
      })
    }
  }

  async startup() {
   this.License()
    .then ((status) => {
      if (status.data.success === true){
        this.core.timer.add([
          {
            id: 'License',       // unique ID of the task
            tickInterval: 500,    // run every 5 ticks (5 x interval = 5000 ms)
            totalRuns: 0,      // run 10 times only. (set to 0 for unlimited times)
            callback(_task: any) {
              // code to be executed on each run
              this.License()
              .then ((active: any) => {
                if (active.data.success === false){
                  this.core.log(`Terminating System due to License Error - ${status.data.error}`, 5)
                  process.exit();
                }
              })
              .catch((err: any) => {
                this.core.log(err, 4)
              })
            }
          }
        ])
        this.core.timer.start();
        this.core.log(`license key valid - version ${this.core.package.version} - ${status.data.message}`, 2)
        parentPort.postMessage({ activation: true })
        process.exit()
      } else {
        this.core.log(`License Error: ${status.data.error}`, 4);
      }
    })
    .catch(err => {
      this.core.log(err, 4)
    })
  }
}

const activation = new Activation

parentPort.on('message', () => {
  activation.startup()
})

activation.startup();
