import mongoose from "mongoose";

interface IUser{
    _id:mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    mobile: string;
    role: "user" | "admin" | "deliveryBoy";
    image?: string;
}

const userSchema = new mongoose.Schema<IUser>({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:false
    },
    image:{
        type: String,
        required:false
    },
    mobile:{
        type: String,
        required:false,
        unique:true,
        sparse:true
    },
    role:{
        type: String,
        enum:["user", "admin", "deliveryBoy"],
        default:"user"
    }
}, {timestamps: true}) 

const User = mongoose.models.User || mongoose.model("User", userSchema); // it save in database as Users

export default User;