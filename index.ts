import { User, Post } from './entities';

type Select<T> = {
  [K in keyof T]?: T[K] extends object ? Select<T[K]> : boolean
}

const selectUser: Select<User> = {
  id: true,
  name: false,
  posts: [{
    id: true,
    text: false,
    user: {
      id: true,
      name: false,
    }
  }]
}

const postSelect: Select<Post> = {
  id: true,
  text: false,
  user: {
    id: true,
    name: false,
    posts: [{
      id: true,
      text: false,
      user: {
        id: true,
        name: false,
      }
    }]
  }
}
