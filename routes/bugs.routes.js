import express from "express";
import { addBug, getAllBugs, deleteBug } from "../controller/bugs.controller.js";

let bugs = express.Router();

bugs.get("/",getAllBugs)
bugs.post("/", addBug)
bugs.delete("/:id", deleteBug)


export default bugs;
