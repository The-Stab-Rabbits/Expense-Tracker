const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/**
 * handle parsing request body
 */
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});