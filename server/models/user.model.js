import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
    },
    email : {
        type : String, 
        required : true, 
        unique : true,
    },
    credits : {
        type : Number, 
        default : 100,
    }
    
},{timestamps: true})

const User = mongoose.model("User", userShema);
export default User;