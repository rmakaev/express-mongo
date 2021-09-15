import PostService from "../API/PostService.js";

class PostController {
  create = async (req, res) => {
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getAll = async (_, res) => {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getOne = async (req, res) => {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  update = async (req, res) => {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  delete = async (req, res) => {
    try {
      const post = await PostService.delete(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

export default new PostController();
