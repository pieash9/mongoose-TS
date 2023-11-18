import express from "express";
import {
  createUser,
  getAdminUsers,
  getUser,
  getUserByID,
} from "./user.controller";
const router = express.Router();

router.get("/", getUser);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserByID);
router.post("/create-user", createUser);

export default router;
