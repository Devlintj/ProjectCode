//Note: Will have to change this to interface with MySQL database upon 
//deploying to heroku
var pgp = require('pg-promise')();

const dbConfig = process.env.DATABASE_URL;

var db = pgp(dbConfig);

module.exports = db;