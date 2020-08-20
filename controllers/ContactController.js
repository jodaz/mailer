const Mail = require('../config/mail');
const { Recipient } = require('../config');

const sendEmail = (req, res) => {

  let { from, subject, message } = req.body;

  // Mail to owner
  Mail.sendMail({
    to: Recipient,
    from: from,
    subject: 'Contact from website.',
    text: subject 
  });

  // Mail to user
  Mail.sendMail({
    to: from,
    subject: "Hi! I've received your email!",
    text: 'Hello world'
  });

  res.status(200).json({
    'success': true,
    'message': '¡Message received!'
  });
};

module.exports = {
  sendEmail
};
