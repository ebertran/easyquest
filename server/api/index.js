require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const router = express.Router()

const userData = new(require('./data/UserData.js'))
const quizData = new(require('./data/QuizData.js'))



router.route('/users')
    .get((req, res) => {
        userData.list()
            .then(users => {
                res.json({
                    status: 'OK',
                    message: 'users listed successfully',
                    data: users
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })

    })

router.route('/users/:id')
    .get((req, res) => {
        const id = req.params.id

        userData.retrieve(id)
            .then(user => {
                res.json({
                    status: 'OK',
                    message: 'user retrieved successfully',
                    data: user
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    
router.route('/quizs')
    .get((req, res) => {
        quizData.list()
            .then(quizs => {
                res.json({
                    status: 'OK',
                    message: 'quizs listed successfully',
                    data: quizs
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    .post((req, res) => {
        const { user, title, author, field, tags, description, version, scope, allowedUsers, active, questions } = req.body

        quizData.create(user, title, author, field, tags, description, version, scope, allowedUsers, active, questions)
            .then(quiz => {
                res.json({
                    status: 'OK',
                    message: 'quiz created successfully',
                    data: quiz
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/quiz/:id')
    .get((req, res) => {
        const id = req.params.id

        quizData.retrieve(id)
            .then(quiz => {
                res.json({
                    status: 'OK',
                    message: 'quiz retrieved successfully',
                    data: quiz
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    

app.use('/api', router)

console.log(`Connecting Quizs API db on url ${process.env.DB_URL}`)

require('./mongoose')

console.log(`Starting Quizs API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Quizs API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping Quizs API...')

    process.exit()
})