const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const creds = require('./config_var');

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

//send mail code
app.post('/sendMail', (req, res, next) => {
  console.log("name: " + req.body.name)
  const email_content = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  }

  const content = `Name: ${email_content.name} \nEmail: ${email_content.email} \nMessage: ${email_content.message}`

  const mail = {
    from: email_content.name,
    to: creds.EMAIL,
    subject: email_content.subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});


module.exports = app;
