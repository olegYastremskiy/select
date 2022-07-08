export type User = {
  id: string;
  name: string;
  posts: Post[];
}

export type Post = {
  id: string;
  text: string;
  user: User;
}
