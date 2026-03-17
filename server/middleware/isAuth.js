import jwt from "jsonwebtoken";


const isAuth = async (req,res,next)=>{
    try{
        const {token} = req.cookies;

        if(!token){
            return res.status(400).json({message: "Token Doesn't Exists"});
        }

        // verify token and get user id
        const verify = await jwt.verify(token, process.env.SECRET_KEY);

        if(!verify){
            return res.status(400).json({message:"Invalid User Does not have valid token"})
        }

        req.userId = verify.userId;

        next()

    }catch(error){
        return res.status(500).json({message:`isAuth error ${error}`})
    }


}

export default isAuth;