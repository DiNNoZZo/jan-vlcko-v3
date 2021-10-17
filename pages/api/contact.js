require('dotenv').config();
const nodemailer = require('nodemailer');

export default (req, res) => {
  const { name, email, subject, message } = JSON.parse(req.body);

  const emailOutput = `
  Tento mail je odoslaný zo stránky janvlcko.com.<br />
  Odosielatel:<br />
    meno: ${name}.<br />
    email: ${email}.<br />
  správa:<br />
    ${message}.
  `;

  let transporter = nodemailer.createTransport({
    service: 'Gmail', // true for 465, false for other ports
    auth: {
      user: process.env.GOOGLE_USER, // generated ethereal user
      pass: process.env.GOOGLE_PASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: {
      name: name,
      adress: email,
    }, // sender address
    to: process.env.GOOGLE_USER, // list of receivers
    subject: subject, // Subject line
    html: emailOutput, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.status(200).json({
      send: true,
      status: 'success',
    });
  });
};
