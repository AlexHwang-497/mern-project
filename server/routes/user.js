import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

// *we are utilizing post routes because we are sending data to the backend
router.post("/signin", signin);
router.post("/signup", signup);

export default router;