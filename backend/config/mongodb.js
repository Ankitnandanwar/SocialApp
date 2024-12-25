import mongoose from "mongoose";

const connectdb = async () => {
    mongoose.connection.on('connected', ()=>{
        console.log('Connected to MongoDB')
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/socialapp`)
}

export default connectdb;