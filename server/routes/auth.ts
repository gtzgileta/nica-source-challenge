import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from '../db';
import { User } from '../db/models/User';
import { RegisterData, LoginData } from './auth.types';
import { jwtTokens } from '../utils/jwt-helpers';

const router: Router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password, role }: RegisterData = req.body;
    let hashedPassword: string = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        first_name,
        last_name,
        user_email: email,
        user_password: hashedPassword,
        user_role: role,
        createdAt: '2022-10-17 22:30:13.188'
    });

    res.json({ status: 'success', data: newUser });
  } catch (error) {
    res.status(401).json({error: 'There was an error with the register process.'});
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginData = req.body;
    const users = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
    if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
    // PASSWORD CHECK
    const validPassword: boolean = await bcrypt.compare(password, users.rows[0].user_password);
    if (!validPassword) return res.status(401).json({error: "Incorrect password"});
    // JWT
    const tokens = jwtTokens(users.rows[0]);//Gets access and refresh tokens
    res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true, sameSite: 'none', secure: true });
    res.json({ user: users.rows, ...tokens });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }

});

router.get('/refresh_token', (req: Request, res: Response) => {
  try {
    const refreshToken: string = req.cookies.refresh_token;
    if (refreshToken === null) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
      if (error) return res.status(403).json({error:error.message});
      const tokens = jwtTokens(user);
      res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true, sameSite: 'none', secure: true });
      return res.json(tokens);
    });
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

router.delete('/refresh_token', (req: Request, res: Response) => {
  try {
    res.clearCookie('refresh_token');
    return res.status(200).json({message:'Refresh token deleted.'});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

export default router;