import { connectDB } from "../../lib/db"; // Ensure correct path to db.js
import sql from "mssql";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  // ✅ Validate email format
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // ✅ Connect to database
    const db = await connectDB();

    // ✅ Insert email into the table
    const result = await db
      .request()
      .input("Email", sql.NVarChar, email)
      .query("INSERT INTO NewsletterSubscribe (Email) VALUES (@Email)");

    return res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    if (error.originalError?.info?.number === 2627) {
      // Handle duplicate entry
      return res.status(409).json({ error: "Email already subscribed" });
    }
    console.error("Database error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
