require('dotenv').config()

require('../mongoose')

const userData = new (require('./UserData'))

userData.list()
	.then(console.log)
	.catch(console.error)

