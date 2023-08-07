import express from 'express'

import { createApp } from './app.mjs'

const app = await createApp(async (app, { root }) => {
    app.use(express.static(`${root}/dist/client`))
})

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running at http://localhost:${port}`)
