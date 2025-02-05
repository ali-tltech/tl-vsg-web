import sql from "mssql";

// ✅ Configure MSSQL Connection
const config = {
  user: "db_aa5acd_vsg_admin",
  password: "Tltech2025", // Replace with actual password
  server: "SQL9001.site4now.net", // Your SQL Server
  database: "db_aa5acd_vsg",
  options: {
    encrypt: true, // Use encryption if connecting to Azure
    trustServerCertificate: true, // Required for local development
  },
};

// ✅ Function to connect to MSSQL
export async function connectDB() {
  try {
    if (!global.connectionPool) {
      global.connectionPool = await sql.connect(config);
    }
    return global.connectionPool;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw new Error("Database connection failed.");
  }
}
