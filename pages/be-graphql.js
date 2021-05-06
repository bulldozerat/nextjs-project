import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { v4 } from 'uuid';

export default function ApolloPage({ users }) {
  return (
    <div>
      {users.map(({ id, login, avatar_url }) => (
        <div key={v4()} style={{ marginBottom: '30px' }}>
          <div>id: {id}</div>
          <div>login: {login}</div>
          <img src={avatar_url} alt='' style={{ width: '100px' }} />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetUsers {
        getUsers {
          id
          login
          avatar_url
        }
      }
    `,
  });

  return {
    props: {
      users: data.getUsers,
    },
  };
}
