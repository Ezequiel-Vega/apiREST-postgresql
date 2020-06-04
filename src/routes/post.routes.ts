import { Router } from "express";
import { postController } from "../controllers/Post.controller";

class PostRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/getPosts", postController.GetPosts);
    this.router.get('/getPost', postController.GetPost);
    this.router.post('/createPost', postController.CreatePost);
    this.router.delete('/deletePost', postController.DeletePost);
    this.router.put('/updatePost', postController.UpdatePost);
  }
}

const postRoutes: PostRoutes = new PostRoutes();
export default postRoutes.router;
