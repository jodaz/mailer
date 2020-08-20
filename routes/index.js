const express = require('express');
const contactRoutes = require('./contact');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api', contactRoutes);
};
