import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "jacqueline.adams1964@gmail.com", // Your email where you'll receive emails
      from: "massagemagicweb@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Massage Magic Web Contact Form</title>
          <meta name="description" content="Massage Magic Web Contact Form">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
          <h3>${req.body.fullname} has sent you a mail.</h3>
          <h2>${req.body.subject}</h2>
          <div style="padding:20px; border:1px solid #CCC; margin: 20px 0;">
            <p>Message:</p>
            <p>${req.body.message}</p>
          </div>
          <p>their email is: ${req.body.email} </p>
          <br>
          <p>From<br>Massage Magic Web Contact Form</p>
        </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;
