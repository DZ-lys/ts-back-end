import { Router } from "express";
import { getProfile, Login, Register } from "../controllers/user.controller";

const userRoute = Router();

userRoute
  .post("/register", Register)
  .post("/login", Login)
  .post("/profile", getProfile);

export { userRoute };
