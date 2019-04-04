const router = require('express').Router()

const teamsController = require('../controllers/teams')

router.get('/teams', teamsController.index)

module.exports = router
