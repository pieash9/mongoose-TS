import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // res.send(`Server is running`);
  /*
  step 1 : Interface
  step 2 : Schema
  step 3: Model
  step 4 : Database Query 
  */

  // crating interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "Male" | "Female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // creating schema
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  // creating model
  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "5",
      role: "student",
      password: "45",
      name: {
        firstName: "pi",
        middleName: "ea",
        lastName: "sh",
      },
      dateOfBirth: "27-11-2000",
      gender: "Male",
      email: "pieash9@gmail.com",
      contactNo: "01791250785",
      emergencyContactNo: "017",
      presentAddress: "USA",
      permanentAddress: "Canada",
    });
    await user.save();

    console.log(user);
  };
  createUserToDB();
});

export default app;
