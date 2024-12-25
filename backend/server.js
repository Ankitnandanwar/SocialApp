import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectdb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import feedRouter from './routes/feedRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectdb()
connectCloudinary()


// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/posts', feedRouter)

app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(port, ()=>console.log('Server started on PORT: '+ port))
