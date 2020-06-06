// load our app server using express
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from ROOOTT")
})

app.get("/users", (req, res) => {
    const user1 = {firstName: "Thomas", lastName: "Dröge"}
    const user2 = {firstName: "Lina", lastName: "Fromme"}
    const user3 = {firstName: "Charlotte", lastName: "Ausborn"}
    
    res.json([user1, user2, user3])
})

// localhost:3000 on browser
app.listen(3000, () => {
    console.log("Server is up and listening on 3000...")
})