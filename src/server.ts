import mongoose from "mongoose";
import app from "./app";
import "dotenv/config";

const port: number = 5000;

//database connection
async function server() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`🛢 Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

server();
