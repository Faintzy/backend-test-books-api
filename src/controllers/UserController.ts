import { getRepository, getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../models/User';
import { Blacklist } from '../models/Blacklist';
import { generateJWT, decodeJWT } from '../utils/jwt';

export const authUser = async (request: Request, response: Response) => {

    const body = request.body

    const res = await getRepository(User).findOne({
        where: {
            email: body.email,
            password: body.password
        }
    });

    if (res) {
        const token = generateJWT({
            id: res.id,
            role: res.profile
        });

        response.set('authorization', token);

        return response.status(200).json({ 
            sucesss: true,
            msg: token
        });
    }

    return response.status(404).json({ 
        sucess: false,
        msg: "Incorrect credentials"
    });

}

export const createUser = async (request: Request, response: Response) => {

    const res = await getRepository(User).save(request.body);

    return response.status(201).json(res);

}

export const logout = async (request: Request, response: Response) => {

    const token = request.body.jwt;

    if (token) {

        var values;

        try {  
            values = decodeJWT(token);
        } catch (err) {
            return response.status(401).json({
                success: false,
                msg: err.message
            });
        }

        const res = await getRepository(Blacklist).save({
            jwt: token
        });

        if (res) {
            return response.status(200).json({
                success: true,
                msg: "Logout successful"
            });
        } else {
            return response.status(200).json({
                success: false,
                msg: "An error was ocurred"
            });
        }

    } else {
        return response.status(401).json({
            success: false,
            msg: "Authorization token not given"
        });
    }
        
}
