const { sendEmail } = require("../mail");

async function SignupNotificationController(req, res) {
    console.log(req.body);
    const { name, email } = req.body;

    const subject = 'Welcome Onboard';

    message = `<b>Hello  ${name}</b><br><br> `+
    'printing and typesetting industry.Lorem Ipsum has been the industry\'s '+ 
   'standard dummy text ever since the 1500s, when an unknown printer took a ' +
    'typesetting, remaining essentially unchanged<br><br>' +
    '<b>Regards JupitTest</b>';

    const recipient = `${name} <${email}>`
  
    try {
        await sendEmail({ recipient, subject, message });

        res.status(200).json({message: "Email Sent Successfully"});
        
    } catch (error) {
        res.status(404).json({ message: "Failed Sending Email" });
    }  
 
}

module.exports = { SignupNotificationController };