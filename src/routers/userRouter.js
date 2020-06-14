const express = require('express')
const router = new express.Router()

router.post('/users', async (req, res) => {
    
        res.send({
                'firstname':'thomas',
                'lastname' : 'dröge'
                })
    
})

module.exports = router