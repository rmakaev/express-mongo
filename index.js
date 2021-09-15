import express from "express";
import mongoose from "mongoose";
import router from "./routers/postsRouter.js";

const PORT = 8000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.0rmux.mongodb.net/node-auth?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
