import { Router } from "express";
import { Login, Register } from "../controllers/user.controller";

const userRoute = Router();

userRoute.post("/register", Register).post("/login", Login);

export { userRoute };
