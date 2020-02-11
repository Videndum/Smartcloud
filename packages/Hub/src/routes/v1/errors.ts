/**
 * Request Type Not allowed
 * @private
 */
export function typeNotAllowed(message:any){
  return {status: 400, message: `Smart Cloud Application - You attempted to call an application using a invalid request type, please change your request type and try again!`}
}
/**
 * Application not defined
 * @private
 */
export function appUndefined(message:any){
  return {status: 400, message: `Smart Cloud Application - You haven't called a application, please include this in your request! App currently is: undefined`}
}
/**
 * Application not valid
 * @private
 */
export function appFailed(message:any){
  return {status: 501, message: `Smart Cloud Application - You haven't called a valid application, please include this in your request!`}
}
/**
 * Action not defined
 * @private
 */
export function actionUndefined(message:any){
  return {status: 400, message: `Smart Cloud Application - You haven't called a function, please include this in your request! function currently is: undefined`}
}
/**
 * Action not valid
 * @private
 */
export function actionFailed(message:any){
  return {status: 501, message: `Smart Cloud Application - You haven't called a valid function, please include this in your request!`}
}
