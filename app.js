// load our app server using express
const  path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('hbs')

const userRouter = require('./src/routers/userRouter')

// Database
const db = require('./src/database/mysql-db')

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error' + err))

const app = express()

const port = process.env.PORT || 3000 

app.use(morgan('combined'))

// Define paths for Express config 
const viewsPath = path.join(__dirname, '/templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.get('', (req, res) => {
    res.render('index')
})

// localhost:3000 on browser
app.listen(port, () => {
    console.log("Server is up and listening on port " + port)
})