import Head from 'next/head';

function UserProfile(props) {
  console.log('props: ', props);
  return (
    <>
      <Head>
        <title>Test title</title>
      </Head>
      <h1>{props.username}</h1>
    </>
  );
}

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log('params: ', params);
  // console.log('req: ', req);
  // console.log('res: ', res);

  return {
    props: { username: 'Mihail' },
  };
}
