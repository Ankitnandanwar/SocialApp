import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    try {
        const {token} = req.headers;
        if(!token){
            return res.json({success:false, message: 'You are not authorized user.'});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}