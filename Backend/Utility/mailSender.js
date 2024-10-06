const nodeMailer = require("nodemailer");

const mailSender = async (email, title, body) => {

    try {

        let transporter = nodeMailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        let info = transporter.sendMail({
            from: 'Youtube Layer - By Kamna',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;

    } catch (err) {
        console.log("Error while sending email" ,err.message);
    }
}

module.exports = mailSender;