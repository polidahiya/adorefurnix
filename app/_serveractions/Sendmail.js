"use server";
import nodemailer from "nodemailer";

export default async function sendMail(mailto, subject, text, html) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "adorefurnix@gmail.com",
        pass: "xjlh tduy ncid xvni",
      },
    });

    // Set up email options
    const mailOptions = {
      from: "adorefurnix@gmail.com",
      to: mailto,
      subject: subject,
      text: text,
      html: html,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return { status: 200, message: "Please check your mail inbox" };
  } catch (error) {
    console.error("Error occurred:", error);
    return { status: 500, message: "Unable to send mail!" };
  }
}
