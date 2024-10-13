import nodemailer from "nodemailer";

export default async function sendMail(mailto, subject, text, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,          
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Set up email options
    const mailOptions = {
      from: process.env.MAIL,  
      to: mailto,             
      subject: subject,        
      text: text,              
      html: html,             
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    
    return info.response; 
  } catch (error) {
    console.error("Error occurred:", error);
    throw error; 
  }
}
