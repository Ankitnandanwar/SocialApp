import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import feedModel from "../models/feedModel.js";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}



// Controller for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token, user })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}




// Controller for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // const picture = req.file;

        // let prof = "";
        // const picUrl = await cloudinary.uploader.upload(picture.path,{resource_type: "image"})
        // prof = picUrl.secure_url;

        // checking user already exist or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exist" });
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email format" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }


        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}





// Controller for Google user
const googleUser = async (req, res) => {
    try {
        const exists = await userModel.findOne({ email: req.body.email });
        if (exists) {
            const token = createToken(exists._id);
            const { password: hashedPassword, ...rest } = exists._doc;
            res.json({ success: true, token, rest })
        } else {
            const generatePassword = Math.random().toString(36).slice(-8);
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(generatePassword, salt);

            const newUser = new userModel({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                profPath: req.body.photo
            })
            const user = await newUser.save();
            const token = createToken(user._id)
            const { password: hashedPassword2, ...rest } = exists._doc;
            res.json({ success: true, token, rest });
        }

    } catch (error) {
        console.log("Error in Google authentication:", error);
        res.json({ success: false, message: error.message });
    }
}


const updateUser = async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.json({ success: false, message: "You can only update" })
    }
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const updateUserDoc = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    profPath: req.body.photo,
                    password: req.body.password,
                    biography: req.body.biography
                }
            }, { new: true });

        const feedUserDoc = await feedModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    feedname: req.body.feedname,
                }
            }, { new: true })

        const { password, ...rest } = updateUserDoc._doc;
        res.json({rest, feedUserDoc})
    } catch (error) {
        console.log("Error in Update User:", error);
        res.json({ success: false, message: error.message });
    }
}


export { loginUser, registerUser, googleUser, updateUser }