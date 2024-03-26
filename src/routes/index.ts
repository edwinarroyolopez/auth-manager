import { Router } from "express";
import { createUser } from '../controllers/userController';
const router = Router();

router.post('/createUser', createUser)

export default router