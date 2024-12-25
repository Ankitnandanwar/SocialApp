import express from 'express'
import { getFeedPost, getUserPost, likePost, createPost } from '../controllers/feedController.js';
import upload from '../middleware/multer.js';
import { verifyToken } from '../middleware/auth.js';

const feedRouter = express.Router();

feedRouter.post('/createfeed', verifyToken, upload.single('picture'), createPost);
feedRouter.get('/', verifyToken, getFeedPost);
feedRouter.get('/:userId/posts', verifyToken, getUserPost);
feedRouter.patch('/:id/like', verifyToken, likePost);


export default feedRouter;