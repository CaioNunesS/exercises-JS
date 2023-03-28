import jsonwebtoken from 'jsonwebtoken';

export const PRIVATE_KEY = '123456'
export const user = {
    name: 'Caio Nunes',
    email: 'caio@example.com',
}

export const tokenValited = (req, res, next) => {
    const [, token] = req.headers.authorization?.split(' ') || [' ', ' '];
    console.log('token ==>', token);

    if (!token) return res.status(401).send('Acess denied. No token provided.')

    try {
        const payload = jsonwebtoken.verify(token, PRIVATE_KEY);
        const userIdFromToken = typeof payload !== 'string' && payload.user;

        if (!user && !userIdFromToken) {
            return res.send(401).json({ message: 'Invalid token' })
        }

        req.headers['user'] = payload.user;

        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Invalid token.' })
    }
}