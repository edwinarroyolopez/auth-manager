import {
    mongoose
  } from '../utils/db';
import User, { IUser } from '../models/userModel';

async function createUser(email: string, username: string): Promise<IUser>  {
    
    try {
        const user = new User({ email, username });
        return await user.save();
    } catch (error) {
        return Promise.reject(error)
    }
   
}

export default { createUser };