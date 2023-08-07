import path from 'path'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import express, { type Express } from 'express'
import { renderPage } from 'vite-plugin-ssr'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const root = `${__dirname}/..`

export const createApp = async (appConfigure?: (app: Express, ctx: { root: string }) => Promise<void>) => {
    const app = express()

    app.use(compression())
    app.use(cookieParser())

    await appConfigure?.(app, { root })

    app.get('*', async (req, res, next) => {
        const urlOriginal = req.originalUrl

        const pageContextInit = {
            urlOriginal,
            req: req,
            res: res,
        }
        const pageContext = await renderPage(pageContextInit)
        const { httpResponse } = pageContext
        if (!httpResponse) return next()

        const reader = httpResponse.getReadableWebStream().getReader()
        console.log('httpResponse.contentType:', httpResponse.contentType)
        res.contentType(httpResponse.contentType)

        // eslint-disable-next-line no-constant-condition
        while (true) {
            const read = await reader.read()
            if (read.done) {
                res.end()
                return
            }

            res.write(read.value)
        }
    })

    return app
}
