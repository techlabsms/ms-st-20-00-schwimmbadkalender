const express = require('express')
const router = new express.Router()
const db = require('../database/mysql-db')
const User = require('../models/user')

// Get user list
router.get('/', (req, res) => 
User.findAll()
    .then(user => {
        console.log(user);
        res.render('showUsers', {
            user
        })
    })
    .catch(err => console.log(err)))

// Add a user
router.post('/add', (req, res) => {
    
    let  {fname, lname} = req.body;
    let errors = [];

    // Validate Fields
   
    if(!fname){
        errors.push({text: 'Please add a fname'})
    }
    if(!lname){
        errors.push({text: 'Please add a lname'})
    }


    //Check for errors
    if(errors.length > 0){
        res.render('index',{
            errors,
            fname,
            lname
        })
        console.log(errors)
        
       
    } else {
         // Insert into table
        User.create({
            fname,
            lname
        })
        .then(user => res.redirect('/users'))
        .catch(err => console.log(err))
    }

   

})


module.exports = router