// Default one only used in PRD (in DEV we see the stack)
function Error({ statusCode }) {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
