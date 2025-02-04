import sql from "mssql";

// ✅ Configure MSSQL Connection
const config = {
  user: "your_db_user",
  password: "your_db_password",
  server: "your_db_server", // e.g., localhost or Azure SQL Server
  database: "your_database",
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
