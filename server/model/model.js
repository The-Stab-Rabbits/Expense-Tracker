// require postgress
// https://node-postgres.com/features/pooling
const { Pool } = require('pg');

//database URL
const PG_URI = 'postgres://rnzbnyzj:tZKuOebNUaSEX3uvr2CkDzaNBNOH6tJb@jelani.db.elephantsql.com/rnzbnyzj';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

/***
 TN - expense
    

 */


//Export query method
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};


/*
 install pg

Model
    require pool pg
    get uri from elephant
    create new instance of pool using connection string
    export pool




 */