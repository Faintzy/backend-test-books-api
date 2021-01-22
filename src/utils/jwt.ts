import * as jwt from 'jsonwebtoken';
import 'dotenv';

export const generateJWT = (values: any) => jwt.sign(values, process.env.APP_TOKEN, {
    expiresIn: "1h"
});

export const decodeJWT = (token: any) => jwt.verify(token, process.env.APP_TOKEN);