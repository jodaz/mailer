const Mail = require('../config/mail');
const { Recipient, Subject } = require('../config');

const sendEmail = (req, res) => {
  let { email, name, message } = req.body;

  try {
    // Mail to owner
    Mail.sendMail({
      to: Recipient,
      from: name,
      subject: Subject,
      text: message 
    });
  
    // Mail to user
    Mail.sendMail({
      to: email,
      subject: Subject,
      text: message
    });
  
    res.status(200).json({
      'success': true,
      'message': '¡Message received!'
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendEmail
};
