// utils/mail.js
const nodemailer = require('nodemailer');

const sendEmail = async (emailOptions) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use other service if not using Gmail
    auth: {
      user: process.env.EMAIL_USERNAME, // Use environment variables to secure credentials
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: emailOptions.to,
    subject: emailOptions.subject,
    text: emailOptions.text,
    html: emailOptions.html // Optional: if you want to send HTML formatted emails
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error; // Rethrow or handle error appropriately
  }
};

module.exports = sendEmail;
