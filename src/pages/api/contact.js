import { connectDB } from "../../lib/db"; // Ensure correct path to db.js
import sql from "mssql";

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

    return res.status(200).json({ message: "Contact submitted successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
