import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//database connection
async function server() {
  try {
    await mongoose.connect(
      "mongodb+srv://pieash9:nVoDIXXg0nKuhJMX@cluster0.2au1tbt.mongodb.net/practice-mongoose?retryWrites=true&w=majority"
    );
    console.log(`🛢 Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}

server();
