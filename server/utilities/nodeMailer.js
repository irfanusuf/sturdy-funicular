const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "mail322.mailasp.net",
  port: 587,
  secure: false, 
  auth: {
    user: "postmaster@australasia-apparels.shop",
    pass: "8Nb_h2!BK@p3",
  },
//   tls: {
//     rejectUnauthorized: false //
//   }
});

module.exports = { transport };
