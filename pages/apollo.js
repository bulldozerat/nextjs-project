import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { v4 } from 'uuid';

export default function ApolloPage({ launches }) {
  return (
    <div>
      {launches.map(({ mission_name, launch_site, rocket }) => (
        <div key={v4()} style={{ marginBottom: '20px' }}>
          <div>Mission name: {mission_name}</div>
          <div>Rocket: {rocket.rocket_name}</div>
          <div>Lunch site: {launch_site.site_name_long}</div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_site {
            site_name_long
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
  });

  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
