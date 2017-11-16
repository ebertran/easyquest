require('dotenv').config()

require('../mongoose')

const userData = new (require('./UserData'))

const assert = require('assert')

userData.list()
	.then(assertList)
	.catch(assertList)

function assertList(res) {
	assert.ok(!(res instanceof Error), `should get results without error ${res}`)

	assert.ok(res, 'results should not be empty')

	assert.ok(res.length > 0, 'results should have values')

	console.log('userData.list OK')
}
