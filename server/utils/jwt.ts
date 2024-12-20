require("dotenv").config();
import { Response } from 'express'
import { redis } from './redis'
import { IUser } from '../models/user.model';

interface ITokenOptions{
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite: 'lax' | 'strict' | 'none' | undefined;
    secure?: boolean;
}

export const sendToken = (user:IUser, statusCode: number, res: Response) => {
    const accessToken = user.SignAccessToken();
    
}