import express from "express";
import { getuserProfile } from "../controllers/user.controller";
import { protectedRoute } from "../middleware/auth.middleware";

const router = express.Router();

// public route
router.get("/profile/:username", getuserProfile);

// protected routes
router.post("/sync", protectedRoute , syncUser)
router.post("/me",protectedRoute,getCurrentUser)
router.put("/profile",protectedRoute, updateProfile);
router.post("/follow/:targetUserId",protectedRoute, followUser)

// update profile => auth

export default userRoutes;
