/**
 * Check which Application is active
 * @private
 */

export default async function checkApplication(requestType:any, req:any, res: Response, core:any){
  const errors = require('./errors')
  const message = {
    type: requestType,
    headers: req.headers,
    query: req.query,
    app: (req.query.app || req.headers.app),
    action: (req.query.action || req.headers.action),
    api: ""
  }
  if (message.app !== undefined) {
    if (core.extensions[message.app]) {
      console.log("found")
      message.api = core.extensions[message.app].file
      // const result = {status: 200, message: "This should work"};
      const result = await core.apiPool.exec(message);
      res.status(result.status).send(result.message);
    } else {
      console.log("failed")
      res.status(errors.appFailed(message).status).send(errors.appFailed(message).message);
    }
  } else {
    console.log("undefined")
    res.status(errors.appFailed(message).status).send(errors.appFailed(message).message);
  }
}
