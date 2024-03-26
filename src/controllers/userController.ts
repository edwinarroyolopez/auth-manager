import { Request, Response } from 'express';
import userService from '../services/userService';

export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { email, username } = req.body;
        console.log({ email, username })
        const user = await userService.createUser(email, username);
        res.json(user);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}