import {Response} from "express";
import userModel from "../models/user.model";
import { redis } from "../utils/redis";

//get user by id
export const getUserById = async(id: string, res: Response) => {
    // const user = await userModel.findById(id);
    // res.status(201).json({
    //     success: true,
    //     user,
    // })
    const userJson = await redis.get(id);

    if(userJson){
        const user = JSON.parse(userJson);
        res.status(201).json({
            success: true,
            user,
        })
    }

}
