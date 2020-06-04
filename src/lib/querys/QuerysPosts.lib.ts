import { getRepository } from "typeorm";
import { Posts } from '../../models/Post.models';

class QuerysPosts {
  async FindAllPosts() {
    return await getRepository(Posts).find();
  }

  async FindOnePost(id: number) {
    return await getRepository(Posts).findOne({ id: id });
  }

  async CreatePost(data: any) {
    // Configurar fecha
    const date: Date = new Date();
    // Crear objeto a guardar
    const dataPost = {
      title: data.title,
      post: data.post,
      date: date
    }
    // Guardar el post
    const newPost = getRepository(Posts).create(dataPost);
    const savePost = await getRepository(Posts).save(newPost);
    // Comprobar si se guardo con exito
    if (savePost) {
      return savePost
    } else {
      return false
    }
  }

  async DeletePost(id: number) {
    const post = await getRepository(Posts).findOne({ id: id });
    if (post) {
      await getRepository(Posts).delete({ id: id });
      return true
    } else {
      return false
    }
  }

  async UpdatePost(data: any) {
    const post = await getRepository(Posts).findOne({ id: data.id })
    if (post) {
      // Configuro la fecha
      const date: Date = new Date();
      // Creo el objeto para actualizar el post
      const dataUpdate = {
        title: data.title,
        post: data.post,
        date: date
      }
      // Actualizo el post
      getRepository(Posts).merge(post, dataUpdate);
      const postUpdate = await getRepository(Posts).save(post);

      return postUpdate
    } else {
      return false
    }
  }
}

export const querysPost: QuerysPosts = new QuerysPosts();