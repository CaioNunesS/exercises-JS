import express from "express";
import jsonwebtoken from "jsonwebtoken";
import { user, PRIVATE_KEY, tokenValited } from "../auth.js";

const api = express();
api.use(express.json());

export const createJwt = (req, res) =>
    res.status(200).json({
        message: 'This is a public router...'
    });

export const login = (req, res) => {
    const [, hash] = req.headers.authorization?.split(' ') || [' ', ' '];
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
    console.log(password);

    try {
        const correctPassword = email === 'caio@example.com' && password === '123456';

        if (!correctPassword) return res.status(401).send('Password or e-mail incorrect!!')

        const token = jsonwebtoken.sign(
            { user: JSON.stringify(user) },
            PRIVATE_KEY,
            { expiresIn: '60m' }
        );

        return res.status(200).json({ data: { user, token } })
    } catch (error) {
        console.log(error);
        return res.send(error)
    }
};


api.use('*', tokenValited);
export const privated = (req, res) => {
    const { user } = req.headers
    const currentUser = JSON.parse(user);
    return res.status(200).json({
        message: 'This is a PRIVATE router...',
        data: {
            userLogged: currentUser
        }
    })
};





