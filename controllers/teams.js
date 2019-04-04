require('dotenv').config()
const express = require('express')
const rp = require('request-promise')
const app = express()

const key = process.env.EPL_KEY

function indexRoute(req, res) {
	console.log(process.env.EPL_KEY)
	rp({
		method: 'GET',
		url:
			'http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76',
		json: true
	})
		.then((response) => {
			return res.json(response)
		})
		.catch((err) => console.log(err))
}

module.exports = {
	index: indexRoute
}
