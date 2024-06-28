import express from "express";
const router=express.Router();
import {login,signup,logout} from "../controllers/auth.controller.js";
router.use(express.json())
router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;