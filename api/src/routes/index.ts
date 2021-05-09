
import { Router } from "express";
import { router as userRouter } from "./user.router";
import { router as fileRouter } from "./files.router";
const router = Router()

// ROUTES
router.use('/user', userRouter);
router.use('/files', fileRouter);
export default router