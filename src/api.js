require('express-async-errors');
const express = require('express');
const cors = require('cors');
const routes = require('./router');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(middlewares.error);

module.exports = app;
