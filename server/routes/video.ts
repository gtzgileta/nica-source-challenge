import express, { Request, Response, Router } from 'express';
import pool from '../db';
import { authenticateToken } from '../middleware/authorization';
import { Video } from '../db/models/Video';

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Video Test");
});

// get the values
router.get("/all", authenticateToken, async (req: Request, res: Response) => {
//   const videos = await pool.query("SELECT * FROM videos WHERE id=1");
//   res.json({videos: videos.rows});
  const videos = await Video.findAll({});
  res.json({videos: videos});
});
  
router.get("/single", authenticateToken, async (req: Request, res: Response) => {
  const video = await Video.findAll({
        where: {
            id: 1
        }
    });
  res.json({ video });
});

router.post('/add', async (req: Request, res: Response) => {
    try {
      const { user_id, title, video_url, img_src, role } = req.body;

      const newVideo = await Video.create({
        user_id,
        title,
        creation_date: '2022-10-17 22:30:13.188',
        video_url,
        img_src,
        role
    });
  
      res.json({ status: 'success', data: newVideo });
    } catch (error) {
      res.status(401).json({error: 'There was an error with the register process.'});
    }
  });

export default router;