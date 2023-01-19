import {User} from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();



// const User = require("../models/user.model.js");





export const login = async(req,res) =>{
    try{
        const {email,password} = req.body.data;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send({message:"Invalid Credentials"});
        }else{
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).send({message:"Invalid Credentials"});
            }
            let token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
            // console.log(token);
            return res.status(200).send({token});
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Something went wrong during Login"});
    }
}

export const signup = async (req,res) => {
    try{
        const {email,password} = req.body.data;
        const user = new User({
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        console.log(password,salt);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        return res.status(200).send(user);

    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Something went wrong during Signup"});
    }
}