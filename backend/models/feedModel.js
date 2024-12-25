import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    feedName: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    userProfileImg: {
        type: String,
    },
    feedImagePath: {
        type: String,
        required: true
    },
    likes: {
        type: Map,
        of: Boolean
    },
}, { timestamps: true })

const feedModel = mongoose.models.feed || mongoose.model("feed", feedSchema)

export default feedModel;