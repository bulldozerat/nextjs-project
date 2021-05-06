import axios from 'axios';

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
    getUser: async (_, args) => {
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
  },
};
