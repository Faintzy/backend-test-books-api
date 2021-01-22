import { Request, Response, NextFunction } from 'express';
import { decodeJWT } from '../utils/jwt';
import { User } from '../models/User';
import { Blacklist } from '../models/Blacklist';
import { getRepository } from 'typeorm';

export default async (request: Request, response: Response, next: NextFunction) => {
    
    const token = request.header('authorization');

    const blacklist = await getRepository(Blacklist).find({
        where: {
            jwt: token
        }
    });

    if (token && blacklist.length == 0) {

        var values;

        try {
            values = decodeJWT(token);
            next();
        } catch (err) {
            return response.status(401).json({
                success: false,
                msg: err.message
            });
        }

    } else {
        return response.json({
            success: false,
            msg: "Authorization token not provided or blacklisted, please login again"
        });
    }

}