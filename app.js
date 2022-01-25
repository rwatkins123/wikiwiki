const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded( { extended: false }));
app.use(express.json());

const layout = require('./views/layout')

app.get('/', (req, res) => {
  res.send(layout("Hello World"));
});

module.exports = app;
