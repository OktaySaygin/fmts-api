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

// const ipAddress = "10.34.10.138"; // IP adresiniz
// const ipAddress = "10.34.10.74"; // IP adresiniz
// const port = process.env.PORT || 3031;

// app.listen(port, ipAddress,() => {
//     console.log(`Server is running at http://${ipAddress}:${port}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
module.exports = app;
