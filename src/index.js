import express from "express";
import cors from "cors";
import mongoose from "mongoose";

//enables the use of environment variables
import dotenv from "dotenv";
dotenv.config();

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

//coverts all incoming request to json
app.use(express.json());
//CORS supports secure cross-origin requests and data transfers between browsers and servers
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

//connect to mongodb
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@recipeapp.omfhe5h.mongodb.net/recipeapp?retryWrites=true&w=majority`);

app.listen(3001, () => console.log("Server running on port 3001"));
