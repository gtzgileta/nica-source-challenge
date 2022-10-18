import express, { Request, Response, Router } from 'express';
import pool from '../db';
import bcrypt from 'bcrypt';

const router: Router = express.Router();

// New user
router.get("/new", async (req: Request, res: Response) => {
  const { password, first_name, last_name, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const users = await pool.query(
    "INSERT INTO USERS (first_name, last_name, user_email, user_password, created_at) VALUES ($1, $2, $3, $4, to_timestamp($5 / 1000.0)) RETURNING *",
    [first_name, last_name, email, hashedPassword, Date.now()]
  );

  res.json({user: users.rows});
});

router.get("/load", async (req: Request, res: Response) => {
    const { id } = req.query;
    const user = await pool.query(`SELECT * FROM users WHERE id=${id}`);
  
    res.json({user: user.rows[0]});
  });

export default router;