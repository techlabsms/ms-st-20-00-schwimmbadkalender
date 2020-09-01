// load our app server using express
const  path = require('path')
const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const userRouter = require('./src/routers/users')

// Database
const db = require('./src/database/mysql-db')


// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error' + err))

const app = express()

app.use(morgan('combined'))

// Define paths for Express config 
const viewsPath = path.join(__dirname, '/templates/views')
const publicDirectoryPath = path.join(__dirname, '/public')


// Setup handlebars engine and views location
app.set('view engine', 'ejs')
app.set('views', viewsPath)

// Body Parser Middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse apllication/json
app.use(bodyParser.json())

// Set static folder
app.use(express.static(publicDirectoryPath))


// index route
app.get('', (req, res) => {
    res.render('index')
})

// Buchung route
app.get('/register', (req, res) => {
     res.render('register')
})

// info route
app.get('/info', (req, res) => {
    res.render('info')
})

// User routes
app.use('/users', require('./src/routers/users'))


const port = process.env.PORT || 3000 

app.listen(port, console.log("Server is up and listening on port " + port))