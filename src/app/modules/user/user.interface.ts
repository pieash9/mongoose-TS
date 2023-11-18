import { HydratedDocument, Model } from "mongoose";

// crating interface
export interface IUser {
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

// instance method
export interface IUserMethods {
  fullName(): string;
}

// statics & instance method
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
