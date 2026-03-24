require('dotenv').config();
const express = require('express');
const app = express();

// const usersRoute = require('../routes/users');
// const homeRoute = require('../routes/home');
// const amazonData = require('../routes/amazonData');
// const wordsData = require('../routes/wordsData');
// const webViewRoute = require('../routes/webView');
// const wellKnownRoute = require('../routes/wellKnown');
// const deeplinkRoute = require('../routes/deeplink');
const pikoRoute = require('../piko/route');

// URL Encoded veri ayrıştırıcı (Opsiyonel)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/.well-known', wellKnownRoute);
// app.use(deeplinkRoute);

// app.use('/monitoring', monitorRoute);
// app.use('/', homeRoute);
// app.use('/users', usersRoute);
// app.use('/amazonData', amazonData);
// app.use('/words', wordsData);
// app.use('/webView', webViewRoute);
app.use('/piko', pikoRoute);

// const ipAddress = "172.20.10.2"; // IP adresiniz
// //const ipAddress = "10.34.10.74"; // IP adresiniz
// const port = process.env.PORT || 3031;

// app.listen(port, ipAddress,() => {
//     console.log(`Server is running at http://${ipAddress}:${port}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
module.exports = app;
