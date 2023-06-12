const { Sequelize }= require('sequelize');

const sequelize = new Sequelize({
    dialect : 'mysql',
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    username : process.env.DB_USER,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD
});

module.exports = sequelize;