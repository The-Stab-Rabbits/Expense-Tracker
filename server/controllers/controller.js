const { Pool } = require("pg");
const db = require("../model/model");
const controller = {};

controller.getExpense = async (req, res, next) => {
  const text = `SELECT * FROM expenses`;
  try {
    const result = await db.query(text);
    res.locals.expenses = result.rows;
    return next();
    
  } catch (err) {
    return next({
      log: `fatal error retrieving expenses from database inside controller.getExpense. ${err}`,
      status: 418,
      message: 'Unable to retrieve expenses'
    });
  }
};

controller.getBalance = async (req, res, next) => {
  const text = `SELECT SUM (amount) FROM expenses`;
  try {
    const result = await db.query(text);
    res.locals.balance = result.rows[0].sum;
    console.log('res.locals.balance', res.locals.balance);
    return next();

  } catch (err) {
    return next({
      log: `fatal error retrieving expenses from database inside controller.getBalance. ${err}`,
      status: 418,
      message: 'Unable to retrieve balances'
    });
  }
};

controller.postExpense = async (req, res, next) => {
  const { vendor, amount, category, date} = req.body;

  try {
    const text = `INSERT INTO expenses (vendor, amount, date, category) VALUES ($1, $2, $3, $4) RETURNING *`;
    const result = await db.query(text, [vendor, amount, date, category])
    res.locals.postexpense = result.rows;
    return next();

  } catch (err) {
    return next({
      log: `fatal error retrieving expenses from database inside controller.postExpense. ${err}`,
      status: 418,
      message: 'Unable to send an expense'
    });
  }
};
controller.deleteExpense = (req, res, next) => {
  // const { vendor, amount, category, date} = req.params;
  const { id } = req.params;

  try {
    const text = `DELETE FROM expenses WHERE id = $1`;
    db.query(text, [id])
    res.locals.oldExpense = req.params;
    return next();

  } catch (err) {
    return next({
      log: `fatal error retrieving expenses from database inside controller.deleteExpense. ${err}`,
      status: 418,
      message: 'Unable to delete an expense'
    });
  }
};

// controller.retrieveLastId = (req, res, next) => {
//   const { vendor, amount, category } = req.body;
//   console.log(req.body);
//   try {
//     const text = `SELECT id FROM expenses ORDER BY id DESC LIMIT 1`;
//     // console.log('res.locals.index', res.locals.index)
//     db.query(text, (err, result) => {
//       // if (!result.rows[0].id) {
//       //   res.locals.index = 0;
//       // } else {
//         res.locals.index = result.rows[0].id;
//       // }
//       // console.log(result);
//       return next();
//     });
//   } catch {
//     return next({
//       log: "fatal error retriving last index",
//       status: 404,
//     });
//   }
// };

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
// INSERT INTO expense1 VALUES ('Walmart', 12, '2022-1-10', 'Shampoo', 0);
