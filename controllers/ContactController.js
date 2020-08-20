const sendEmail = (req, res) => {
  res.status(200).json(req.body);
};

module.exports = {
  sendEmail
};
