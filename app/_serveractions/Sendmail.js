"use server";
import nodemailer from "nodemailer";

export default async function Sendmail({
  to,
  subject,
  html,
  from = "noreply@adorefurnix.com",
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.brevo_user,
        pass: process.env.brevo_pass,
      },
    });

    const mailOptions = { from, to, subject, html };
    const info = await transporter.sendMail(mailOptions);
    return {
      status: 200,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.log("❌ Error sending email:", error);
    return {
      status: 500,
      message: "Error sending email",
    };
  }
}
