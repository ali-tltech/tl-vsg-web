import { connectDB } from "../../lib/db";
import sql from "mssql";
import nodemailer from "nodemailer";

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
console.log("envv",transporter);

// Simple, organized email template for company notification
const createNotificationEmail = (formData) => {
  const { name, subject, email, phoneNumber, message } = formData;
  const date = new Date().toLocaleString();
  
  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>New Website Enquiry</h2>
        <p>You have received a new enquiry from your website contact form.</p>
        
        <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5;">
          <h3>Enquiry Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Date:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phoneNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h4>Message:</h4>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
        </div>
        
        <p style="color: #666; font-size: 14px;">This is an automated notification from your website contact form.</p>
      </body>
    </html>
  `;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, subject, email, phoneNumber, message } = req.body;

  if (!name || !subject || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // 1. Save to database
    const pool = await connectDB();
    await pool
      .request()
      .input("name", sql.NVarChar, name)
      .input("subject", sql.NVarChar, subject)
      .input("email", sql.NVarChar, email)
      .input("phoneNumber", sql.NVarChar, phoneNumber)
      .input("message", sql.NVarChar, message)
      .query(
        "INSERT INTO Contacts (name, subject, email, phoneNumber, message) VALUES (@name, @subject, @email, @phoneNumber, @message)"
      );

    // 2. Send notification email to company
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: "enablement@vsgenxsolutions.com",
      subject: "New Website Enquiry Received",
      html: createNotificationEmail(req.body),
      replyTo: email // Allows direct reply to the enquirer
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Contact submitted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}