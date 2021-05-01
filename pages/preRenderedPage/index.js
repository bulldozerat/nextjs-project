import { useRef } from 'react';

export default function PreRenderedPage({ wolverineData }) {
  const inputRef = useRef();

  const logKey = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} onChange={() => logKey()} />
      <div>{wolverineData.name}</div>
    </>
  );
}

// getStaticProps tells Next to pre-render the page in advance (pregenerated page durring the build process)
export async function getStaticProps(context) {
  const wolverineData = await (
    await fetch('https://superheroapi.com/api.php/2481591191854227/search/wolverine')
  ).json();

  if (!wolverineData.results[0]) {
    return {
      notFound: true, // true or false. if true returns the 404 page.
    };
  }

  // return {
  //   redirect: {
  //     destination: '/nested/123',
  //   },
  // };

  return {
    props: {
      wolverineData: wolverineData.results[0],
    },
    revalidate: 60, // rebuilds each 60 seconds when build
  };
}
