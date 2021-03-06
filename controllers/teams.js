require('dotenv').config()
const rp = require('request-promise')

function indexRoute(req, res) {
	console.log(process.env.EPL_KEY)
	rp({
		method: 'GET',
		url: process.env.EPL_URL,
		json: true
	})
		.then((response) => {
			const sorted = response.sort(function(teamA, teamB) {
				return teamB.points - teamA.points
			})
			return res.json(sorted)
		})
		.catch((err) => console.log(err))
}

module.exports = {
	index: indexRoute
}
