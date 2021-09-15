import Post from "../models/Post.js";

class PostService {
  create = (post) => {
    return Post.create(post);
  };

  getAll = () => {
    return Post.find();
  };

  getOne = (id) => {
    if (!id) throw new Error("Id was not defined");
    return Post.findById(id);
  };

  update = (post) => {
    if (!post._id) throw new Error("Id was not defined");
    return Post.findByIdAndUpdate(post._id, post, { new: true });
  };

  delete = (id) => {
    if (!id) throw new Error("Id was not defined");
    return Post.findByIdAndDelete(id);
  };
}

export default new PostService();
