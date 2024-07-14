import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDb } from "./utils/connectToDb";
import postRoutes from './routes/postRoutes'
dotenv.config();

const app = express();
app.use(express.json())
app.use('/api/v1',postRoutes)
app
  .listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
  });

connectToDb()
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });
