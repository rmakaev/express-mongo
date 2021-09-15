import Router from "express";
import PostController from "../controllers/PostController.js";

const postsRouter = new Router();

postsRouter.post("/posts", PostController.create);
postsRouter.get("/posts", PostController.getAll);
postsRouter.get("/posts/:id", PostController.getOne);
postsRouter.put("/posts", PostController.update);
postsRouter.delete("/posts/:id", PostController.delete);

export default postsRouter;
