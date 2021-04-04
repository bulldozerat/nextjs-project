import Head from 'next/head';
import Image from 'next/image';

function UserProfile(props) {
  console.log('props: ', props);
  return (
    <>
      <Head>
        <title>Test title</title>
      </Head>
      <Image src='/img.jpg' alt='test' width='300' height='300' />
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
