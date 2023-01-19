import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import user from "./routes/user.routes.js";


import connection from "./config/db.js";
import bugs from "./routes/bugs.routes.js";
dotenv.config();



let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user",user);
app.use("/bugs",bugs);
connection();




app.listen(process.env.PORT, () => {
    console.log(`Server started on port on http://localhost:${process.env.PORT}`,);
})