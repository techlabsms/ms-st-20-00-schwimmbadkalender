const express = require('express')
const router = new express.Router()

router.get('/users', async (req, res) => {
    
        res.send({
                'firstname':'thomas',
                'lastname' : 'dröge'
                })
    
})

module.exports = router