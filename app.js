// load our app server using express
const  path = require('path')
const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')
const hbs = require('hbs')

const userRouter = require('./src/routers/userRouter')


const app = express()

const port = process.env.PORT || 3000 

app.use(morgan('combined'))

// Define paths for Express config 
const viewsPath = path.join(__dirname, '/templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Thomas D.'
    })
})


app.get('/user/:id', (req, res) => {
    console.log("Fetching user with id: " + req.params.id)

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'usersdb',      
    })

    const userId = req.params.id
    const queryString = "SELECT * FROM users WHERE id = ?"
    connection.query(queryString, [userId], (err, rows, fields) => {
        if(err){
            console.log("Failed to query for users: "+ err) 
        } else{
            console.log("I think we fetched users successfully")
            res.json(rows)
        }      
    })
})

//automatically parse incoming json to an object, for e.g. access it in request-handler
app.use(express.json())
app.use([userRouter])

// localhost:3000 on browser
app.listen(port, () => {
    console.log("Server is up and listening on port " + port)
})