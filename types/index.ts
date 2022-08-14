export type Post = {
  id: number;
  dpName: 'HIDDEN_COSTS';
  image: string;
  dims: {
    width: number;
    height: number;
  };
  website: string;
  date: string;
  type: 0 | 1;
  description: string;
  comments: Comment[];
  showMore?: boolean;
};

export type Comment = {
  id: number;
  text: string;
  user: User;
  likes: number;
};

export type User = {
  name: string;
};
