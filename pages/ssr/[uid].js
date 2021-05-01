function UserProfile(props) {
  console.log('props: ', props);
  return (
    <h1>
      {props.username} {props.uid}
    </h1>
  );
}

export default UserProfile;

// ssr no pre-generate (each request)
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log('params: ', params);
  // console.log('req: ', req);
  // console.log('res: ', res);

  return {
    props: { username: 'Mihail', uid: params.uid },
  };
}
