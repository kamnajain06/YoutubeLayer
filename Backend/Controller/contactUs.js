const mailSender = require("../Utility/mailSender");

exports.contactUs = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name, !email, !message, !subject) {
            return res.json({
                success: false,
                message: "Please enter the required fields",
            })
        }

        const payload = {
            name,
            email,
            subject,
            message 
        }



        const mailSendToUser = await mailSender(email, "Confirmation Email", "Your response has been submitted to YoutubeLayer. We'll contact you shortly");

        const mailSendToEdTech = await mailSender(process.env.MAIL_USER, "Response from a User", payload);


        return res.status(200).json({
            success: true,
            message: "Mail Sent Successfully",
        })

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: "Error while sending email"
        })
    }
}