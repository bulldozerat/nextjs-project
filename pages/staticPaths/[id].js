export default function staticPathsHTML({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.description}</h2>
    </div>
  );
}

// pregenerated page durring the build process
export async function getStaticProps(context) {
  const productId = context.params.id;
  const products = await fetch('http://localhost:3000/api/products').then((response) => response.json());
  const product = products.list.find((pr) => pr.id === productId);

  return {
    props: {
      product,
    },
  };
}

// for dymanic pages + getStaticProps
// need to pregenerate all of the pages (for which values to pregenerate)
export async function getStaticPaths() {
  return {
    paths: [
      // list with ids to be pregenerated (only for [id] ect)
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
    ],
    fallback: 'blocking',
    // are there more paths than these paths. If false another id will go to 404 page
    // if set to blocking it will wait and send the whole html (no loading)
  };
}
