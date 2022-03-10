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

controller.getMonths = async (req, res, next) => {
  const month = req.params.month
  // console.log('month param', month)
  let chartObj = {}
  try {
    const text = `SELECT * FROM expenses WHERE months = $1`
    const result = await db.query(text, [month])
    // console.log('result', result)
    res.locals.data = result.rows
    res.locals.data.forEach(element => {
      if (!chartObj[element.category]) chartObj[element.category] = element.amount
      else (chartObj[element.category]) += element.amount
    })
    res.locals.chart = chartObj

    // console.log('res.locals.chart:' ,res.locals.chart)
    // console.log('res.locals.data:' , res.locals.data)

    return next()
  } catch (err) {
    return next({
      log: `fatal error retrieving expenses from database inside controller.getMonths. ${err}`,
      status: 418,
      message: 'Unable to send the month data'
    });
  }
}

controller.getYear = async (req, res, next) => {

  let yearObj = {};
  let catObj = {}
  try {
    const text = `SELECT * FROM expenses`
    const result = await db.query(text);
    res.locals.yeardata = result.rows;
    res.locals.yeardata.forEach(element => {
      if (!yearObj[element.months]) yearObj[element.months] = element.amount
      else (yearObj[element.months]) += element.amount
    })
    res.locals.yeardata.forEach(element => {
      if (!catObj[element.category]) catObj[element.category] = element.amount
      else (catObj[element.category]) += element.amount
    })
    res.locals.yearchart = yearObj;
    res.locals.catchart = catObj
    // console.log('res.locals.catChart',res.locals.catChart);
    return next();
  }
  catch (err) {
    return next({
      log: `fatal error retrieving expenses from database inside controller.getYear. ${err}`,
      status: 418,
      message: 'Unable to send the year data'
    });
  }
}

controller.postExpense = async (req, res, next) => {
  const { vendor, amount, category, date } = req.body;
  const month = date.slice(5, 7)
  try {
    const text = `INSERT INTO expenses (vendor, amount, date, category, months) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const result = await db.query(text, [vendor, amount, date, category, month])
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
