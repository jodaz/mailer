const router = require('express').Router();
const ContactController = require('../controllers/ContactController');

router.post('/contact', ContactController.sendEmail);

module.exports = router;
