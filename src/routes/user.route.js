import express from "express";
import { getuserProfile } from "../controllers/user.controller";
import { protectedRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/profile/:username", getuserProfile);
router.put("/profile",protectedRoute, updateProfile);

// update profile => auth

export default userRoutes;
