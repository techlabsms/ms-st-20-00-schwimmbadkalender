// load our app server using express
const express = require('express')
const app = express()

// localhost:3000 on browser
app.listen(3000, () => {
    console.log("Server is up and listening on 3000...")
})