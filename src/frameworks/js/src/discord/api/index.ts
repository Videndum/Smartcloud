/**============================================
 *               Imports
 *=============================================**/

import fetch from 'node-fetch'
import path from 'path'

/**============================================
 *               Enums for API
 *=============================================**/
enum apiVersion {
    current = 8,
    v8 = 8,
    v6 = 6,
    v5 = 5,
    v4 = 4,
    v3 = 3
}

enum authenticationType {
    bot = 0,
    bearer = 1
}

/**============================================
 *               Types & Interfaces
 *=============================================**/

interface headers {
    Authorization: string
    "User-Agent": string
}


/**============================================
 *               API Class
 *=============================================**/

export class API {
    protected apiVersion: apiVersion = apiVersion.current

    constructor() {
        this.get({authentication: authenticationType.bot, url: "/users/@me"}) //?
    }

    private async get({ authentication = authenticationType.bot, url }: { authentication: authenticationType, url: string }) {
        let response = await fetch(`https://discord.com/api/v${this.apiVersion}` + url, {
            headers: {
                Authorization: authentication == authenticationType.bot ? `Bot NzkyODg1MjIyODEwMzIwOTM3.X-kN6A.cO1VUn0FEiULNavhFcVPkvCwRGo` : `Bearer token`,
                "User-Agent": `${process.env.NPM_PACKAGE_NAME || "Smartcloud"} (${process.env.NPM_PACKAGE_HOMEPAGE || "https://www.smartcloud.gg/"} ${process.env.NPM_PACKAGE_VERSION || "unknown"})`
            }
        })
        return response.json()
    }
}

new API()