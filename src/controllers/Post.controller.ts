import { Request, Response } from "express";
import { querysPost } from "../lib/querys/QuerysPosts.lib";

class PostControler {
  // Obtener posts
  async GetPosts(req: Request, res: Response) {
    // Busco todos los posts
    const posts = await querysPost.FindAllPosts();
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(400).json({ msg: 'Hubo un problema! No se pudo encontrar ningun post!' })
    }
  }

  async GetPost(req: Request, res: Response) {
    // Busco el post
    const post = await querysPost.FindOnePost(req.body.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).json({ msg: 'Hubo un problema! No se pudo encontrar el post!' })
    }
  }

  // Crear post
  async CreatePost(req: Request, res: Response) {
    // Obtener la informacion del post a crear
    const data = req.body
    // Crear post
    const post = await querysPost.CreatePost(data);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).json({ msg: 'Hubo un problema! No se pudo creaer el post!' })
    }
  }

  // Eliminar post
  async DeletePost(req: Request, res: Response) {
    const Delete = await querysPost.DeletePost(req.body.id);
    if (Delete) {
      res.status(200).json({ msg: "Se elimino el post" });
    } else {
      res.status(400).json({ msg: "Hubo un error! No se elimino el post!" });
    }
  }

  // Actualizar post
  async UpdatePost(req: Request, res: Response) {
    const postUpdate = await querysPost.UpdatePost(req.body);
    if (postUpdate) {
      res.status(200).json({ msg: 'Post Actualizado', postUpdate: postUpdate });
    } else {
      res.status(400).json({ msg: 'Hubo un error! No se pudo actulizar los datos del post!' })
    }
  }
}
export const postController: PostControler = new PostControler();
