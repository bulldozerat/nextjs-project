import dummyProducts from '../../dummyData/dummyProducts';

export default function PreRenderedPage({ products }) {
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
      324
    </div>
  );
}

// getStaticProps tells Next to pre-render the page in advance
export async function getStaticProps(context) {
  console.log('re-generating page');
  console.log(context);

  // return {
  //   redirect: {
  //     destination: '/nested/123',
  //   },
  // };

  // return {
  //   notFound: true, // true or false. if true returns the 404 page.
  // };

  return {
    props: {
      products: dummyProducts,
    },
    revalidate: 60, // rebuilds each 60 seconds when build
  };
}
