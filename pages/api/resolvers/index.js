import fs from 'fs';

const booksPath = process.cwd() + '\\utils\\books.json';

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await fetch('https://api.github.com/users').then((response) => response.json());
        return users.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_, args, context, info) => {
      try {
        const user = await fetch(`https://api.github.com/users/${args.name}`).then((response) => response.json());
        return {
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
    libraries: () => {
      const data = fs.readFileSync(booksPath, 'utf8');
      const { books } = JSON.parse(data);
      const uniqueBranches = [...new Set(books.map((book) => book.branch))].map((branch) => ({ branch }));

      return uniqueBranches;
    },
  },
  Mutation: {
    addBook: async (_, args) => {
      const newBook = {
        title: args.title,
        author: args.author,
        branch: args.branch,
      };
      const data = fs.readFileSync(booksPath, 'utf8');
      const { books } = JSON.parse(data);
      const newBooksData = { books: [...books, newBook] };

      fs.writeFileSync(booksPath, JSON.stringify(newBooksData, null, 4));

      return newBook;
    },
  },
  Library: {
    books: (parent) => {
      const data = fs.readFileSync(booksPath, 'utf8');
      const { books } = JSON.parse(data);

      return books.filter((book) => book.branch === parent.branch);
    },
  },
  Book: {
    author: (parent) => {
      return {
        name: parent.author,
      };
    },
  },
};
