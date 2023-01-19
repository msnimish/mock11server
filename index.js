import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./config/db.js";
dotenv.config();


let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connection();

app.post("/users", (req, res) => {

})


app.listen(process.env.PORT, () => {
    console.log(`Server started on port on http://localhost:${process.env.PORT}`,);
})