const express = require('express');
const middlewares = require('./config/middlewares');
const routes = require('./config/routes');
const app = express();

middlewares(app);
routes(app);

module.exports = app;
