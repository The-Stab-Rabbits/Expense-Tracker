
const { Pool } = require('pg');
const db = require('../model/model')

const controller = {}; 

controller.getExpense = (req,res,next) => {
  const text = `SELECT * FROM expense;`;
  
  try{
    db.query(text, (err, result) => {
      // console.log(result.rows)
      res.locals.expenses = result.rows;
      // console.log(res.locals.expenses);
      return next();
    });
  }
  catch{
    return next({
      log: 'fatal error retrieving expenses from database inside controller.getExpense',
      status: 404
    });
  }

  
} // error handler here ?



controller.postExpense = (req,res,next) => {
  const { vendor, amount, category} = req.body
  console.log(req.body);
  try{
    const text = `INSERT INTO expense VALUES( '${vendor}', ${amount}, '2020-12-20','${category}');`
    db.query(text, (err, result) => {
      // console.log(result);
      return next();
    });
  }
  catch {
    return next({
      log: 'fatal error creating new expense in database inside controller.postExpense',
      status: 404
    });
  }
}
// INSERT INTO table_name(column1, column2, …)
// VALUES (value1, value2, …);

// CREATE TABLE expense (
//     Vendor varchar(255),
//     Amount int,
//     Date date,
//     Category varchar(255),
// );


module.exports = controller;




/** 

const text = `SELECT result1.*, agg.titles as films, agg.film_id FROM result1 LEFT JOIN agg ON result1._id = agg._id limit 1;` 
db.query(text, (err, result) => {
    try { 
    res.locals.characters = result.rows;
    
    for (let i = 0; i < res.locals.characters.length; i++){
      // console.log('hi')
      
      //  converting film and film_id long string to arrays
      const film_id = res.locals.characters[i]['film_id'] = res.locals.characters[i]['film_id'].split(',');
      const film = res.locals.characters[i]['films'] = res.locals.characters[i]['films'].split(',');

      //iterating film and film_id arrays and create film objects
      console.log(film.length);
      for (let j = 0; j < film.length; j++){
        console.log('bye');
        film[j] = { title: film[j], id: film_id[j]};
      }
      //res.locals.characters[i]['films']
    }
    console.log(res.locals.characters);
    next();
    }catch(err){ 
    console.log('we got an error')
    }
  })

*/