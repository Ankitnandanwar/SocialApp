import express from 'express'
import { googleUser, loginUser, registerUser, updateUser } from '../controllers/userController.js'
import { verifyToken } from '../middleware/auth.js';
// import upload from '../middleware/multer.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser);
// userRouter.post('/register', upload.single('picture'), registerUser);
userRouter.post('/register', registerUser);
userRouter.post('/google', googleUser)
userRouter.post('/updateuser/:id', verifyToken, updateUser)

export default userRouter;