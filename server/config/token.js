import jwt from 'jsonwebtoken';

const getToken = async (userId)=>{
    try{
        const token =  jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:"7d"})
        return token;
    }catch(error){
        console.log("Error : " + error.message);
    }
}

export default getToken;