import dummyProducts from '../../dummyData/dummyProducts';

export default function staticPaths({ products }) {
  return (
    <h1>test</h1>
    // <div>
    //   {products.map((product) => (
    //     <h1 key={product.id}>{product.title}</h1>
    //   ))}
    //   324
    // </div>
  );
}

export async function getStaticProps(context) {
  console.log('context: ', context);
  const productId = context.params.pid;
  const product = dummyProducts.find(pr.id === productId);

  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: [{ pid: 'p1' }],
      },
    ],
    fallback: false,
  };
}
