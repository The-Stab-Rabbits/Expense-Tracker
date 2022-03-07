const { Pool } = require('pg');
const db = require('../model/model')
const controller = {};

controller.getExpense = (req, res, next) => {
  const text = `SELECT * FROM expense;`;
  try {
    db.query(text, (err, result) => {
      // console.log(result.rows)
      res.locals.expenses = result.rows;
      // console.log(res.locals.expenses);
      return next();
    });
  }
  catch {
    return next({
      log: 'fatal error retrieving expenses from database inside controller.getExpense',
      status: 404
    });
  }
}

controller.getBalance = (req, res, next) => {
  const text = `SELECT SUM(amount) FROM expense`;
  try {
    db.query(text, (err, result) => {
      // console.log(result.rows)
      // console.log(result.rows[0].sum)
      res.locals.balance = result.rows[0].sum;
      // console.log(res.locals.expenses);
      return next();
    });
  }
  catch {
    return next({
      log: 'fatal error retrieving balance from database',
      status: 404
    });
  }
}

controller.postExpense = (req, res, next) => {
  const { vendor, amount, category, id} = req.body

  // console.log(req.body);
  try {
    const text = `INSERT INTO expense VALUES( '${vendor}', ${amount}, '2017-12-20','${category}', '${id}');`
    res.locals.newExpense = req.body;
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
controller.deleteExpense = (req, res, next) => {
  // const { vendor, amount, category, date} = req.params;
  const { id } = req.params;
  console.log('req.params for delete', id);
  try {
    const text = `DELETE FROM expense WHERE id = ${id}`;
    res.locals.oldExpense = req.params;
    db.query(text, (err, result) => {
      // console.log(result);
      return next();
    });
  }
  catch {
    return next({
      log: 'fatal error deleteing  expense in database inside controller.deleteExpense',
      status: 404
    });
  }
}

controller.retrieveLastId = (req, res, next) => {
  const { vendor, amount, category } = req.body
  console.log(req.body);
  try {
    const text = `SELECT id FROM expense ORDER BY id DESC LIMIT 1`
    // console.log('res.locals.index', res.locals.index)
    db.query(text, (err, result) => {
      res.locals.index = result.rows[0].id;
      // console.log(result);
      return next();
    });
  }
  catch {
    return next({
      log: 'fatal error retriving last index',
      status: 404
    });
  }
}


module.exports = controller;



// INSERT INTO table_name(column1, column2, …)
// VALUES (value1, value2, …);

// CREATE TABLE expense (
//     Vendor varchar(255),
//     Amount int,
//     Date date,
//     Category varchar(255),
//     id int  
// );

