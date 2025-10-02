export type Book = {
    _id : string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: Author;
    genre: string;
    views: number;
}

export type Author = {
    name: string;
}

export type Rating = {
    user: {
        name: string;
    }
    rating: number;
    comment: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}

export type ApiError = {
  message: string;
  code?: string;
};

export type AuthResponse = {
  accessToken: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
};
