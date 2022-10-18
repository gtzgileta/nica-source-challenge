import express, { Request, Response, Router } from 'express';
import pool from '../db';

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Video Test");
});

// get the values
router.get("/all", async (req: Request, res: Response) => {
  const videos = await pool.query("SELECT * FROM videos WHERE id=1");
  // const values = await pgClient.query("SELECT * FROM videos");

  res.json({videos: videos.rows});
});

export default router;