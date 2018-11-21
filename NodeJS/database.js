var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'kyletestdb',
   user: 'postgres',
   password: '' 
};

var db = pgp(dbConfig);

module.exports = db;