//Route file for signup/login functionality

import express from "express";
import {signup,login,logout,updateProfile,checkAuth} from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile)                //protectRoute is a middleware applied here to confirm user is loggedin to update its profile

router.get("/check",protectRoute,checkAuth)
export default router