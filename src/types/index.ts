export type Book = {
    _id : string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: Author;
    genre: string;
}

export type Author = {
    name: string;
}