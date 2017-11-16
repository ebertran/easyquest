require('dotenv').config()

require('../mongoose')

const quizData = new (require('./QuizData'))

const assert = require('assert')

quizData.list()
	.then(assertList)
	.catch(assertList)

function assertList(res) {
	assert.ok(!(res instanceof Error), `should get results without error ${res}`)

	assert.ok(res, 'results should not be empty')

	assert.ok(res.length > 0, 'results should have values')

	console.log('quizData.list OK')
}