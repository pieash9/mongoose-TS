import { Request, Response } from "express";
import {
  createUserToDB,
  getAllAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getAdminUsers = async (req: Request, res: Response) => {
  const admin = await getAllAdminUsersFromDB();
  res.status(200).json({
    status: "success",
    data: admin,
  });
};

//   route => controller  => service
