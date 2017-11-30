require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const router = express.Router()

const userData = new(require('./data/UserData.js'))
const quizData = new(require('./data/QuizData.js'))
const userLogic = new (require('./logic/UserLogic'))

router.route('/users')
    .get((req, res) => {
        const query = req.query.query

        if (query) {
            const search = usersData.searchUsers(query).map(user => ({ id: user.id, username: user.username }))

            log.info(`searched users matching query "${query}" succeeded`)

            res.json({
                status: 'OK',
                message: 'users searched successfully',
                data: search
            })
        } else {

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
        }
    })
    .post((req, res) => {
        const { username, password, avatar,color, email, name, surname, birthdate, sex, zipcode, studies, occupation, organization} = req.body
    
            userData.create(username, password, avatar,color, email, name, surname, birthdate, sex, zipcode, studies, occupation, organization)
                .then(user => {
                    res.json({
                        status: 'OK',
                        message: 'user created successfully',
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

router.route('/users/login')
    .post((req, res) => {
        const { username, password } = req.body

        userLogic.login(username, password)
            .then(user => {
                res.json({
                    status: 'OK',
                    message: 'user created successfully',
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

router.route('/users/:userId/quizs/:quizId')
        .post((req, res) => {
            const { userId, quizId } = req.params
            const { questions } = req.body
        
                userData.addSolvedQuiz(userId, quizId, questions)
                    .then(user => {
                        res.json({
                            status: 'OK',
                            message: 'user created successfully',
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
        const { user, title, author, field, tags, description, version, questions } = req.body

        quizData.create(user, title, author, field, tags, description, version, questions)
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

router.route('/quizs/:id')
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