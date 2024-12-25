import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        default: ""
    },
    profPath: {
        type: String,
        default : "https://img.freepik.com/free-photo/young-woman-taking-pictures-concept_53876-42664.jpg"
    },
}, { minimize: false, timestamps: true })

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel