const express = require('express')
const router = new express.Router()

router.post('/users',  (req, res) => {
    
        res.send({'test': 'test'})
    
})

module.exports = router