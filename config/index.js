require('dotenv').config();

module.exports = {
  APP_ENV: process.env.APP_ENV,
  APP_PORT: process.env.APP_PORT,
  OPTIONS: {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
};
