import mongoose from "mongoose";
import app from "./app";
import "dotenv/config";

const port: number = 5000;

//database connection
async function server() {
  try {
    await mongoose.connect(process.env.DB_URL);

    app.listen(port, () => {
      console.log(`🛢 Database connected &  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

server();
