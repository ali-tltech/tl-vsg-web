import { connectDB } from "../../lib/db";
import sql from "mssql";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, subject, email, phoneNumber, message } = req.body;

  if (!name || !subject || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const pool = await connectDB();

    // Insert into database
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

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vsgenx33@gmail.com",
        pass: "mdgm nrge hnlh leek", // App password
      },
    });

    // Email content
    // const mailOptions = {
    //   from: "vsgenx33@gmail.com",
    //   to: "vsgenx33@gmail.com", // Company email
    //   subject: `New Contact Form Submission: ${subject}`,
    //   text: `
    //     New contact form submission details:
    //     Name: ${name}
    //     Subject: ${subject}
    //     Email: ${email}
    //     Phone: ${phoneNumber}
    //     Message: ${message}
    //   `,
    // };

    const mailOptions = {
      from: "vsgenx33@gmail.com",
      replyTo: email,
      to: "vsgenx33@gmail.com", // Company email
      subject: `Website Contact Form Submission by ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                color: #333;
                text-align: center;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }
              td {
                padding: 10px;
                border-bottom: 1px solid #ddd;
              }
              .message-box {
                background: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                margin-top: 15px;
              }
              .footer {
                font-size: 12px;
                color: #666;
                text-align: center;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Contact Form Submission</h2>
              <p>A new inquiry has been received through your website contact form.</p>
              
              <table>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td><strong>Phone:</strong></td>
                  <td>${phoneNumber}</td>
                </tr>
                <tr>
                  <td><strong>Subject:</strong></td>
                  <td>${subject}</td>
                </tr>
              </table>
    
              <div class="message-box">
                <h4>Message:</h4>
                <p>${message}</p>
              </div>
    
              <p class="footer">This is an automated notification from your website contact form.</p>
            </div>
          </body>
        </html>
      `,
    };
    

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Notification email sent successfully");
    } catch (emailError) {
      console.error("Error sending notification email:", emailError);
    }

    return res.status(200).json({ message: "Contact submitted successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}