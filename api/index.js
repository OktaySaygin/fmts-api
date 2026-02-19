const express = require('express');
const app = express();

const usersRoute = require('../routes/users');
const homeRoute = require('../routes/home');
const amazonData = require('../routes/amazonData');
const wordsData = require('../routes/wordsData');
const webViewRoute = require('../routes/webView');

// URL Encoded veri ayrıştırıcı (Opsiyonel)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/monitoring', monitorRoute);
app.use('/' ,homeRoute);
app.use('/users', usersRoute);
app.use('/amazonData', amazonData);
app.use('/words', wordsData);
app.use('/webView', webViewRoute);

module.exports = app;
