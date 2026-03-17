import User from '../models/user.model.js'
import getToken from '../config/token.js';

export const googleAuth = async(req,res)=>{
    try{
        const {name, email} = req.body;

        let user = await User.findOne({email});
        if(!user){
            user = await User.create({name,email});
        }

        const token = await getToken(user._id);
        res.cookie("token", token, { httpOnly:true, secure: false, sameSite:"Lax", maxAge : 7*24*60*60*1000});

        return res.status(200).json(user);

        
    }catch(error){
        res.status(500).json({message:`Google Auth Error : ${error.message}`})
    }
}

export const logOut = async (req,res)=>{
    try{
        await res.clearCookie("token");
        return res.status(200).json({message:`LogOut Successfully`})
    }catch(error){
        res.status(500).json({message:`LogOut Error : ${error.message}`})
    }

}