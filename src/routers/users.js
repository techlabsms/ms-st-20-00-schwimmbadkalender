const express = require('express')
const router = new express.Router()
const db = require('../database/mysql-db')
const User = require('../models/user')
//const { Sequelize } = require('sequelize/types')
const Sequelize = require('sequelize')
//const {Op, Sequelize} = Sequelize.Op;
const { Op } = require ("sequelize")
const moment = require('moment')


// Get user list
router.get('/showusers', (req, res) => 

User.findAll()
    .then(user => {
        console.log(user);  
        res.render('showUsers', {
            user
        })
    })
    .catch(err => console.log(err)))

// Get users which are in the swimming pool
router.get('/',  (req, res) => 
   User.findAll({
       where: {
           updatedAt: {
            [Op.gte]: moment().subtract(42, 'weeks').toDate() }
        }
     })
    .then(user => {
        var numberOfPersonsTotal = 0;
        for(i = 0; i <user.length; i++){
            //console.log(i);
            console.log(user[i].numberOfPersons);
            numberOfPersonsTotal += user[i].numberOfPersons + 1;
        }
        res.send(JSON.stringify(numberOfPersonsTotal));
        
})
.catch(err => console.log(err)))



// Add a user
router.post('/add', (req, res) => {
    
    let  {fname, lname, street, streetNumber, plz, city, email, numberOfPersons} = req.body;
    let errors = [];

    // Validate Fields
   
    if(!fname){
        errors.push({text: 'Bitte geben Sie einen Vornamen an'})
    }
    if(!lname){
        errors.push({text: 'Bitte geben Sie einen Nachnamen an'})
    }
    if(!street){
        errors.push({text: 'Bitte geben Sie eine Straße an'})
    }
    if(!streetNumber){
        errors.push({text: 'Bitte geben Sie eine Straßennummer an'})
    }
    if(!plz){
        errors.push({text: 'Bitte geben Sie eine Postleitzahl an'})
    }
    if(!city){
        errors.push({text: 'Bitte geben Sie eine Stadt an'})
    }
    if(!email){
        errors.push({text: 'Bitte geben Sie eine Emailadresse an'})
    }
    


    //Check for errors
    if(errors.length > 0){
        res.render('index',{
            errors,
            fname,
            lname,
            street,
            streetNumber,
            plz,
            city,
            email
        })
    
        console.log(errors)
        
       
    } else {
         // Insert into table
        User.create({
            fname,
            lname,
            street,
            streetNumber,
            plz,
            city,
            email,
            numberOfPersons
        })
        .then(user => res.redirect('/users'))
        .catch(err => console.log(err))
    }

   

})


module.exports = router