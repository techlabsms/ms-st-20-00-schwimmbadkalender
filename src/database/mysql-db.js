const Sequelize = require('sequelize');

module.exports =  new Sequelize('heroku_e97db364948b84b', 'b2acd743f723fe', 'f044813a', {
    host: 'us-cdbr-east-02.cleardb.com',
    dialect: 'mysql',
    
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  
  });
