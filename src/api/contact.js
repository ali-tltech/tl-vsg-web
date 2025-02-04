import { connectDB } from "../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // 🚨 Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    try {
      const pool = await connectDB();

      // ✅ Insert data into MSSQL database
      const result = await pool
        .request()
        .input("name", sql.NVarChar, name)
        .input("email", sql.NVarChar, email)
        .input("phone", sql.NVarChar, phone)
        .input("message", sql.NVarChar, message)
        .query(
          "INSERT INTO ContactForm (name, email, phone, message) VALUES (@name, @email, @phone, @message)"
        );

      console.log("Inserted Rows:", result.rowsAffected);
      return res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Internal Server Error!" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
