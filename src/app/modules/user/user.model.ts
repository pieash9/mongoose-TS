import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;
// creating schema
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// creating model
const User = model<IUser, UserModel>("User", userSchema);

export default User;

// {
//   "id":"111243434",
//   "role":"student",
//   "password":"dw",
//   "name":{
//      "firstName":"t",
//      "middleName":"re",
//      "lastName":"z"
//   },
//   "dateOfBirth":"8-8-1999",
//   "gender":"Female",
//   "email":"pieash9@gmail.com",
//   "contactNo":"01791250785",
//   "emergencyContactNo":"017",
//   "presentAddress":"USA",
//   "permanentAddress":"Canada"
// }
