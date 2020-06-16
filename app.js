// load our app server using express
const  path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('hbs')
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

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Set static folder
app.use(express.static(path.join(__dirname, './src/public')))


app.get('', (req, res) => {
    res.render('index')
})


// User routes
app.use('/users', require('./src/routers/users'))

const port = process.env.PORT || 3000 

app.listen(port, console.log("Server is up and listening on port " + port))