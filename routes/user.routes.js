import express from "express";
import { login, signup } from "../controller/user.controller.js";


let user = express.Router();

user.post("/signup",signup)

user.post("/login",login)

export default user;