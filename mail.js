const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    }
});

//send Email
const sendEmail = async ({ recipient, subject, message }) => {
    return await transport.sendMail({
        from: 'no-reply@jupitTest.com',
        to: recipient,
        subject,
        text: message,
        html: message,
    });
}

module.exports = { sendEmail }