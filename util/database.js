const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecommerce-admin','root','SQLpassword',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;
