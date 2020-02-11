/**
 * @module Api
 */
import v1 from "./v1/route"

/**
 * Import each API Module
 */
const apiRoute = "/api"
const v1API = `${apiRoute}/v1`
let requestType;

/**
 * Check the incoming requests and activate correct functions
 * @param api [description]
 * @param core  SCAA Core Actions
 * @private
 */
export class Routes {
    public routes(api:any, core:any): void {
      /**
       * V1 API
       */
      api.route(`${v1API}`)
        .get((req: Request, res: Response) => {
          requestType = "get"
          core.log("API v1 Called", 1)
          v1(requestType, req, res, core)
        })
        .post((req: Request, res: Response) => {
          requestType = "post"
          core.log("API v1 Called", 1)
          v1(requestType, req, res, core)
        })

      api.route(`${apiRoute}/login/`)
        .post((req: Request, res: Response) => {

        })
    }
}
