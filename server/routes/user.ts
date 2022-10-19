import express, { Request, Response, Router } from 'express';
import pool from '../db';
import bcrypt from 'bcrypt';

const router: Router = express.Router();

router.get("/load", async (req: Request, res: Response) => {
    const { id } = req.query;
    const user = await pool.query(`SELECT * FROM users WHERE id=${id}`);
  
    res.json({user: user.rows[0]});
  });

export default router;