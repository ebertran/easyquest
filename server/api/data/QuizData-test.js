require('dotenv').config()

require('../mongoose')

const quizData = new (require('./QuizData'))

quizData.list()
	.then(console.log)
	.catch(console.error)

