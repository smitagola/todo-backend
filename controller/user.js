import db from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const CreateUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: "All fields are required", error: true });
    }
    try {
        // Hash the password
        const saltRounds = 10;
        const hashpassword = await bcrypt.hash(password, saltRounds);

        const query = "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *";
        const values = [username, email, hashpassword];

        const result = await db.query(query, values);
        console.log(hashpassword);
        res.status(201).json({ msg: "User created successfully", error: false, data: result.rows[0] });
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ msg: "Internal Server Error", error: true });
    }
}


export const LoginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "All fields are required", error: true });
    }

    try {
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];

        const result = await db.query(query, values);

        if (result.rows.length === 0) {
            return res.status(400).json({ msg: "User not found", error: true });
        }
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials", error: true });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN , { expiresIn: '1h' });
        res.user = user;
        res.status(200).json({ msg: "User logged in successfully", error: false, data: user , token:token });
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ msg: "Internal Server Error", error: true });
    }
}