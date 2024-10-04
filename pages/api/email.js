import nodemailer from 'nodemailer';

export default async function handler(req, res) {

  // console.log('Request received:', req.body);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'aidan1.mck@gmail.com',
      pass: 'optj fkde yvxv cjal',
    },
  });


  const emailHtml = 'Hi there ' + req.body.name +
    ', <br><br> A new support ticket has been submitted. <br><br> <b>Details:</b> ' +
    '<span >' + req.body.details + '</span>' +
    '<br> <b>Urgency:</b> ' +
    (function() {
      switch(req.body.urgency) {
        case "notUrgent":
          return '<span style="color:green;">' + req.body.urgency + '</span>';
        case "low":
          return '<span style="color:blue;">' + req.body.urgency + '</span>';
        case "normal":
          return '<span style="color:orange;">' + req.body.urgency + '</span>';
          case "critical":
            return '<span style="color:red;">' + req.body.urgency + '</span>';
        default:
          return '<span>' + req.body.urgency + '</span>';
      }
    })() +
    '<br><br>================<br> Regards <br>JCP Support Team<br>================'+
     '<br><br> <span style="color:red;">This is an automated email. Please do not reply to this email.</span>'
    ;

  const mailOptions = {
    from: 'aidan1.mck@gmail.com',
    to: 'aidan1.mck@gmail.com',
    subject: 'Support ticket',
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
