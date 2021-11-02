const express = require('express');
const app = express();
const routes = require('./routes');
const sendError = require('@helper/sendError')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sendError);

app.use('/', routes)

module.exports = app;