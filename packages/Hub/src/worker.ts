const { parentPort, workerData } = require("worker_threads");

async function work(data:any) {
  // console.log(data)
  const file = require(data.api)
  const result = file.Api(data)
  return data = {status: result.status, message: result.message}
}

parentPort.on("message", async (param: any) => {
  const result = await work(param);
  console.log(result)
  parentPort.postMessage({status: result.status, message: result.message});
});
