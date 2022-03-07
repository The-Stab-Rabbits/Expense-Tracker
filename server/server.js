const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const controller = require('./controllers/controller')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * handle parsing request body
 */
app.use(express.json());

// Get all inputed expenses back from database
app.get('/api/get', controller.getExpense, (req, res) => {
  return res.status(200).json(res.locals.expenses)
})

// Retrieve sum of all balances
app.get("/api/getBalance", controller.getBalance, (req, res) => {
  return res.status(200).json(res.locals.balance)
})

// Add new expense to database
app.post("/api/expenses", controller.postExpense, (req, res) => {
  return res.status(200).json(res.locals.newExpense)
})

// delete expense from database
// app.delete("/api/expenses", controller.deleteExpense, (req, res) => {
//   return res.status(200).json(res.locals.oldExpense)
// })
// // retrieve last index key in database
// app.get("/api/index", controller.retrieveLastId, (req, res) => {
//   return res.status(200).json(res.locals.index)
// })
//catch-all route hanlder for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// TODO:
/***
 * index collumn to row
 * new get request for index
 *      retrieve last index in database
 * 
 */