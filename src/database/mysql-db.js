const Sequelize = require('sequelize');

module.exports =  new Sequelize('user-db', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  
  });