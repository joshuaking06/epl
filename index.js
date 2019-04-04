require('dotenv').config()
const express = require('express')
const routes = require('./config/routes')

const app = express()

app.use(routes)

app.use(express.static(`${__dirname}/dist`))

app.use('/api', routes)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () =>
	console.log(`Express is serving the dist folder on port ${process.env.PORT}`)
)
