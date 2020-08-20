const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const app = express();

// Setting up
const { APP_PORT } = require('./config');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

require('./routes')(app);
// Start server
app.listen(APP_PORT, () => {
  console.log(`Listening on http://127.0.0.1:${APP_PORT}`);
});
