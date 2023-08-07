import serverlessExpress from '@vendia/serverless-express'
import type { Handler } from 'aws-lambda'

import { createApp } from './app.mjs'

let serverlessExpressInstance: Handler

export const handler: Handler = async (event, context, callback) => {
    if (!serverlessExpressInstance) {
        const app = await createApp()
        serverlessExpressInstance = serverlessExpress({ app })
    }

    return serverlessExpressInstance(event, context, callback)
}
