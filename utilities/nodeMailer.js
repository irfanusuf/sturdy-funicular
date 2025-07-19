const nodemailer = require("nodemailer");
require('dotenv').config()

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ,
  secure: false, 
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
//   tls: {
//     rejectUnauthorized: false //
//   }
});

module.exports = { transport };
