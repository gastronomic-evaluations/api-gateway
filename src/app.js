require('dotenv').config();
const express = require('express');
const middlewares = require('./config/middlewares');
const proxy = require('./config/routes');
const app = express();

middlewares(app);
proxy(app);

app.use('/healthcheck', (req, res) => res.status(200).json({ status: 'alive!' }));

module.exports = app;
