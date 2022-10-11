const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "zoho",
  // Disable MFA on zoho here to prevent authentication failed: https://accounts.zoho.com/home#multiTFA/modes
  // ********************* OR *****************
  // set up Application-Specific Passwords here: https://accounts.zoho.com/home#security/device_logins
  auth: { user: process.env.EMAIL_ADDRESS, pass: process.env.EMAIL_PASSWORD },
});

const mailOptions = ({ body, contact, name }) => ({
  from: process.env.EMAIL_ADDRESS,
  to: "chukwuemeka@alienforest.com",
  subject: `Portfolio Message${name ? ` from ${name}!!!` : "!!!"}`,
  html: `
      <!DOCTYPE html>

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Portfolio Message!!!</title>
        </head>

        <body>
          <main>${body}</main>
          <hr/>
          ${contact ? `Contact: ${contact}` : ""}            
        </body>
      </html>
        `,
});

const handler = async ({ name, body, contact }) => {
  try {
    const sendMail = async () => {
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions({ body, contact, name }), (err, info) => {
          if (err) {
            if (process.env.NODE_ENV !== "production") console.log("Error sending", err);
            reject(err);
          }
          if (info) {
            if (process.env.NODE_ENV !== "production") console.log("Email sent: " + info.response);
            resolve(info);
          }
        });
      });
    };

    // verify connection and valid configuration
    // transporter.verify(function (error, success) {
    //   if (error) {
    //     throw "connection or authentication error";
    //   }
    //   if (success) {
    await sendMail();
    //   }
    // });
  } catch (error) {
    throw "an error occured";
  }
};

export default async (req, res) => {
  try {
    const { name, body, contact } = req.body;
    await handler({ name, body, contact });
    return res.status(200).json(true);
  } catch (error) {
    console.assert(process.env.NODE_ENV !== "production", error);
    return res.status(401).json(false);
  }
};
