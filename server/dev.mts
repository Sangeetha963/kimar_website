import { createApp } from './app.mjs'

const app = await createApp(async (app, { root }) => {
    const vite = await import('vite')
    const viteDevMiddleware = (
        await vite.createServer({
            root,
            server: { middlewareMode: true, host: true },
            clearScreen: false,
        })
    ).middlewares
    app.use(viteDevMiddleware)
})

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running at http://localhost:${port}`)
