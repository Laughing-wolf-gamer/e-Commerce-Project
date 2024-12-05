import jwt from 'jsonwebtoken';


export const GenerateJWTAndCookies = (user,res)=>{
    const token =jwt.sign({
        id:user._id,
        role:user.role,
        email:user.email,
        userName:user.userName,
    },process.env.JWT_SECRETE,{
        expiresIn: '1h',
    })
    res.cookie('token',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: new Date(Date.now() + 60*60*1000), // 1 hour
    })
    
}
export const VerifyJWTAndCookies = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token) return res.status(401).json({Success:false,message: 'No token, authorization denied'});
    jwt.verify(token, process.env.JWT_SECRETE, (err, user) => {
        if(err) return res.status(403).json({Success:false,message: 'Token is not valid'});
        req.user = user;
        next();
    });
}