import feedModel from "../models/feedModel.js";
import userModel from "../models/userModel.js";
import {v2 as cloudinary} from 'cloudinary'

const createPost = async (req, res) => {
    try {
        const { userId, description } = req.body;
        const picture = req.file;
        const user = await userModel.findById(userId)

        let prof = "";
        const picUrl = await cloudinary.uploader.upload(picture.path, { resource_type: "image" })
        prof = picUrl.secure_url;

        console.log(userId, description)
        console.log(prof)
        console.log(user)
        console.log(user.profPath)


        const newPost = new feedModel({
            userId,
            feedName: user.name,
            description,
            feedImagePath:prof,
            userProfileImg:user.profPath,
            likes: {},
        })
        await newPost.save()
        const post = await feedModel.find();
        res.status(201).json(post)

        // res.json({})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const getFeedPost = async (req, res) => {
    try {
        const post = await feedModel.find();
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const getUserPost = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await feedModel.find({ userId });
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await feedModel.findById(id);
        const isLiked = post.likes.get(userId);
        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }
        const updatePost = await feedModel.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        )
        res.status(200).json({success:true, updatePost})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export { getFeedPost, getUserPost, likePost, createPost }
