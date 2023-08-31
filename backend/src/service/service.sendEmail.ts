import nodemailer from 'nodemailer';

const sendGeneratedLinkEmail = async (recipientEmail: string, link: string) => {
  try {
    // Create a nodemailer transporter for sending the email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.TRANSPORT_EMAIL, // Replace with your email
        pass: process.env.TRANSPORT_PASSWORD, // Replace with your email password or use process.env.EMAIL_PASSWORD
      },
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.TRANSPORT_EMAIL, // Replace with your email
      to: recipientEmail, // Recipient's email
      subject: "Your Link to the Homepage", // Email subject
      html: `<p>Click the link below to access the homepage: <br>
      <a href="${link}">Click Here</a>
      </p>`,
      // Email body containing the link to the homepage
    };

    // Sending the email
    await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully");
  } catch (error) {
    // Failed to send email
    console.error(error);
    throw new Error("Failed to send email");
  }
};

export default sendGeneratedLinkEmail;
