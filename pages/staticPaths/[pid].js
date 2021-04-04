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

// export async function getStaticProps(context) {
//   console.log('context: ', context);
//   const productId = context.params.pid;
//   const product = dummyProducts.find(pr.id === productId);

//   return {
//     props: {
//       products,
//     },
//   };
// }

// tells next for which params should pre-render the page
// TODO research more
// export async function getStaticPaths() {
//   const listWithPregeneratedIds = [
//     {
//       pid: '1',
//       pid: '2',
//       pid: '3',
//     },
//   ];

//   return {
//     paths: listWithPregeneratedIds,
//     fallback: 'blocking',
//     // are there more paths than these paths. If false another id will go to 404 page
//     // if set to blocking it will wait and send the whole html (no loading)
//   };
// }
