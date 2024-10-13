"use server";
import jwt from "jsonwebtoken";
import { domain } from "@/app/commondata";
import { sociallinks } from "@/app/commondata";
import sendMail from "@/app/_serveractions/Sendmail";
import bcrypt from "bcrypt";
import { getcollection } from "@/app/Mongodb";
const { userscollection } = getcollection();

export const Sendpassresetmail = async (email) => {
  try {
    const userdata = await userscollection.findOne({ email });
    if (!userdata) return { status: 400, message: "User not found!" };

    const token = jwt.sign({ email }, process.env.jwt_secret, {
      expiresIn: "1h",
    });

    const passresetmail = `
                        <!DOCTYPE html>
                        <html lang="en">
                          <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                            <style>
                              body {
                                font-family: "Helvetica Neue", Arial, sans-serif;
                                background-color: #f4f4f4;
                                margin: 0;
                                padding: 0;
                              }
                              .email-container {
                                background-color: #ffffff;
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                border-radius: 10px;
                                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                              }
                              .header {
                                text-align: center;
                                width: 100%;
                                height: 250px; /* Adjust height as needed */
                                background-image: url('${domain}/images/pullokkaran-banner-01.jpg');
                                background-size: cover;
                                background-position: center;
                                border-bottom: 1px solid #ddd;
                                position: relative;
                              }
                              .header img {
                                width: 150px; /* Adjust width as needed */
                                margin-top: 20px;
                                position: relative;
                                z-index: 1; /* Ensure logo appears above the background */
                              }
                              .content {
                                padding: 20px;
                                text-align: center;
                              }
                              .reset-button {
                                display: inline-block;
                                padding: 15px 30px;
                                font-size: 18px;
                                color: white;
                                background-color: #007bff;
                                border-radius: 50px;
                                text-decoration: none;
                                margin: 20px 0;
                                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                              }
                              .reset-button:hover {
                                background-color: #0056b3;
                              }
                              .footer {
                                padding: 20px;
                                text-align: center;
                                background-color: #f7f7f7;
                                border-top: 1px solid #ddd;
                                font-size: 14px;
                                color: white;
                                background: linear-gradient(110deg,#79818c,#263242);
                              }
                              .social-icons {
                                margin-top: 10px;
                              }
                              .social-icons img {
                                width: 30px;
                                border-radius: 100%;
                                margin: 0 10px;
                              }
                           
                              .footer a {
                                color: #007bff;
                                text-decoration: none;
                              }
                              .footer a:hover {
                                text-decoration: underline;
                              }
                            </style>
                          </head>
                        
                          <body>
                            <div class="email-container">
                              <!-- Logo Section -->
                              <div class="header">
                                <img
                                  src="${domain}/logo3.png"
                                  alt="Adorefurnix Logo"
                                />
                              </div>
                        
                              <!-- Content Section -->
                              <div class="content">
                                <h2>Password Reset Request</h2>
                                <p>
                                  We received a request to reset your password. Click the button below
                                  to set a new password:
                                </p>
                        
                                <!-- Password Reset Button -->
                                <a href="${domain}/forgotpassword?token=${token}" class="reset-button">Reset Password</a>
                        
                                <p>If you didn&apos;t request this, you can safely ignore this email.</p>
                                <p>This password reset link will expire in 1 hours.</p>
                              </div>
                        
                              <!-- Footer Section -->
                              <div class="footer">
                                <p>Follow us on social media:</p>
                                <div class="social-icons">
                                  <a href=${sociallinks.twitter} target="_blank">
                                    <img
                                      src="${domain}/socialicons/xlogo.png"
                                      alt="X Logo"
                                    />
                                  </a>
                                  <a href=${sociallinks.insta} target="_blank">
                                    <img
                                      src="${domain}/socialicons/instagramlogo.jpg"
                                      alt="Instagram Logo"
                                    />
                                  </a>
                                  <a href=${sociallinks.facebook} target="_blank">
                                    <img
                                      src="${domain}/socialicons/facebooklogo.png"
                                      alt="Facebook Logo"
                                    />
                                  </a>
                                </div>
                                <p>
                                  Have any questions?
                                  <a href="${domain}/Contact">Contact us</a>
                                </p>
                                <p>© 2024 Adorefurnix.com. All rights reserved.</p>
                              </div>
                            </div>
                          </body>
                        </html>
    `;

    sendMail(email,"Passsword Reset","",passresetmail);

    return { status: 200, message: "Please check your mail inbox" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server error try again!" };
  }
};

export const Resetpassword = async (newpassword, token) => {
  try {
    const jwtres = jwt.verify(token, process.env.jwt_secret);
    const encrypterpassword = await bcrypt.hash(newpassword, 12);

    await userscollection.findOneAndUpdate(
      { email: jwtres?.email },
      { $set: { password: encrypterpassword } }
    );

    return { status: 200, message: "Password updated" };
  } catch (error) {
    console.log(error);
    if (error.name == "TokenExpiredError")
      return { status: 400, message: "Link expired!" };

    return { status: 500, message: "Server error try again!" };
  }
};