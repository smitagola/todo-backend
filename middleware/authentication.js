import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied", error: true });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        console.log('user decode', decoded); // Log the decoded token payload
        req.user = decoded; // Attach the decoded user information to the req object
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid", error: true });
    }
};